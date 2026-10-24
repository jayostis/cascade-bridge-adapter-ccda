# C-CDA R2.1 XML, as the adapter sees it

Read on 2026-10-07 from HL7's publications: CDA R2's schema with the SDTC
extensions (HL7/CDA-core-2.0, the commit the crate names), the C-CDA R2.1
templates as HL7's C-CDA on FHIR guide cites them (HL7/ccda-on-fhir), and HL7's
two example CCDs (HL7/C-CDA-Examples). C-CDA is HL7's, under its own licence;
nothing of its text is copied here.

## What a C-CDA is

A **CDA** document is one `ClinicalDocument` in the `urn:hl7-org:v3` namespace:
a header naming the patient (`recordTarget`), who wrote it (`author`) and who
keeps it (`custodian`), and a body of sections. A **C-CDA** is a CDA whose
header claims the US Realm Header template, a `templateId` whose `root` is
`2.16.840.1.113883.10.20.22.1.1`, with an `extension` naming the template's
version from R2 on (`2015-08-01` in R2.1). A document claiming it may also
claim a document type, a Continuity of Care Document among them.

A CDA that claims no US Realm Header is not a C-CDA, and the detect rule says
so. Apple's `export_cda.xml` is one: a CDA of HealthKit samples.

The media type is `application/cda+xml`, which HL7 registered at IANA in 2021.

## What a record is

The whole `ClinicalDocument` is the **source record**: a C-CDA's header, its
patient and its narrative are in reach of every mapping. The mappings make a
Cascade record of each **clinical statement** they read, never of the act that
wraps it:

| a record | the element | its class |
|---|---|---|
| the patient | `recordTarget/patientRole` | `Patient` |
| an allergy | an Allergy Intolerance Observation (`2.16.840.1.113883.10.20.22.4.7`) in an entry's Allergy Concern Act | `AllergyIntolerance` |
| a problem | a Problem Observation (`4.4`) in an entry's Problem Concern Act | `Condition` |
| an immunization | an Immunization Activity (`4.52`), the entry's own statement | `Immunization` |
| a procedure | a Procedure Activity Procedure (`4.14`), the entry's own statement | `Procedure` |
| a medication | a Medication Activity (`4.16`), the entry's own statement in a Medications section, in mood `INT` or `EVN` | `MedicationRequest` |
| a lab result | a Result Observation (`4.2`) in a Result Organizer (`4.1`), the entry's own statement in a Results section | `Observation` |

The custodian's organisation is the document's author.

A section is mapped by its `templateId`: Allergies (`2.16.840.1.113883.10.20.22.2.6.1`),
Problems (`2.5.1`), Immunizations (`2.2.1`), Procedures (`2.7.1`), Medications
(`2.1.1`) and Results (`2.3.1`), each also by the root without `.1`, where its
entries are optional. Every other section is a finding: vital signs and
narrative-only sections alike, until a release maps it. An entry of a mapped
section holding a statement this release does not read, a Procedure Activity
Act or Observation among them, is a finding too.

A problem's status is its Problem Status Observation's, else its concern act's
where that is `active`; its category is its section's, by the section's code. An
immunization whose `negationInd` is true was not done, whatever its
`statusCode` says.

A Medication Activity's mood says what it is: `INT`, a medication intended, is
a prescription, and `EVN`, one taken, an entry on a list of what the person
takes. Both are one kind of record, told apart by their intent. One whose
`negationInd` is true says the medication is not taken, and is no record. Every
RxNorm and NDC code of its drug, the `code` and each `translation`, is carried;
a C-CDA marks none as the one a user chose, so none is the selected code. A Result
Organizer is a panel, and no record; each Result Observation in it is one, and
any other statement in it, a Vital Sign Observation (`4.27`) among them, is a
finding.

The class is the FHIR resource type a record of its kind is mapped from; a
record is typed by the Cascade class it is written as, and a statement with no
id names that class in its name ([Names](#names)). A statement's selector refines the document element's by
`component[1]/structuredBody[1]/component[n]/section[1]/entry[n]/act[1]/entryRelationship[n]/observation[n]`,
each step written `*[local-name()='…' and namespace-uri()='urn:hl7-org:v3']` and
counted among its same-name siblings.

## The envelope

One: the document element is `ClinicalDocument`, and it is the record. A
package wrapping a C-CDA, an IHE XDM zip among them, is not read here.

## Ids and nullFlavor

An `id` is an HL7 instance identifier: a `root`, an OID or a UUID, and an
optional `extension`. A statement may carry several, alternatives for one act,
and the first usable one in document order names it: one with a non-empty
`root` and no `nullFlavor`. `<id nullFlavor="NI"/>` says the statement has none.

**An id is not kept unique.** A portal's download repeats an id across
statements, restates one act in two places, and leaves a statement with no id,
so a record is named from its id only where no other statement of the document
carries that id with other content ([Names](#names)).

A `nullFlavor` stands where a value would: on an `id`, a `code`, a `value` or a
time. Where it stands alone, nothing is carried.

## Names

A record's name is one of cascade-vocabulary's naming rules, each the body of
its `tests/vectors/naming/<rule>.rq` there, copied into `../in/sparql/record.rq`
and hashed once for the rule picked. Two scopes say whose an id is: the
**custodian**, the first usable `id` of
`custodian/assignedCustodian/representedCustodianOrganization`, and the
**patient**, the first usable `id` of the `patientRole` of the document's one
`recordTarget`, each usable as the section above says. A document with more
than one `recordTarget` states no patient scope.

| a statement | its rule | its inputs, after the rule |
|---|---|---|
| with an id, in both scopes | `RecordFromCcdaNamingRule` | the custodian's root and extension, the patient's root and extension, the statement's root and extension, an absent extension `""` |
| the patient, in both scopes | `RecordFromCcdaNamingRule` | as above, its own id as the patient's and the statement's |
| with no id, in both scopes | `RecordFromCcdaWithoutIdNamingRule` | the custodian's and the patient's root and extension, the IRI of its Cascade class, its key fingerprint or `""`, and its members fingerprint where it has no key fingerprint, else `""` |
| any other, the patient included | `RecordFromDocumentNamingRule` | the document's `ni:` name and the statement's selector |

A statement is named by the document where:

- the document states no custodian id, or not exactly one patient with an id.
  An empty scope would fuse every scope-less document's statements of one id,
  or of one class and key, two patients' among them, which the scopes exist to
  stop; a name by the document errs the other way, two records a judgment can
  join. Each such record is a finding, `ccda:namingScopeNotStated`.
- its id is another statement's of the document with other content: another
  record class, another key fingerprint, or, where neither states a key field,
  other members. The source broke its own id, and one name for both would fuse
  two facts no judgment could split. Each of them is a finding,
  `ccda:entryIdRepeated`.

A record named by the document carries no `cascade:sourceUrl`: its name is not
its id's. A version links its patient only where the document has one
`recordTarget`; with none or with more, nothing says which patient a statement
is about, and each record but a patient is a finding,
`ccda:patientOfStatementNotStated`.

### Fingerprints

A fingerprint is a set of strings summed: each string's UTF-8 bytes hashed
with SHA-256, the hash's first twelve hexadecimal digits read as a 48-bit
integer, and the integers added, in decimal. A string counts once, and order is
no part of it. The sum is exact integer arithmetic: it passes 2^53 after a few
dozen strings, past which a double-precision float rounds.

- A **key fingerprint** sums the statement's key fields, each written
  `name=value` (`code=91936005`, `effectiveTime=20241015`), the fields of its
  class `../in/sparql/document-table.rq` declares. A statement stating none has
  no key fingerprint, never `0`.
- A **members fingerprint** sums every literal held at or under the statement:
  `<element type IRI>=<text>` for an element's text and
  `<element type IRI>@<attribute IRI>=<value>` for an attribute, leaving out
  each `ID` and each `reference`'s `value`.
  - An element's type IRI is `urn:hl7-org:v3` and its local name, with no
    separator: `urn:hl7-org:v3originalText`.
  - An attribute in no namespace is `http://sparql.xyz/facade-x/data/` and its
    name: `http://sparql.xyz/facade-x/data/nullFlavor`. One in a namespace is
    that namespace's IRI and its local name, again with no separator:
    `xsi:type` is `http://www.w3.org/2001/XMLSchema-instancetype`. Its value is
    as the XML specification normalises an attribute's.
  - A text is each run of text between two tags, as written, entities
    replaced and line endings made line feeds, never trimmed; CDATA content
    counts as text; a comment or a processing instruction neither splits a run
    nor appears in it, so `Reti<!-- x -->red` is one run, `Retired`. A run that
    is only whitespace is none. An element of mixed content holds several runs,
    each its own string.

The fingerprint vectors, each with the statements that pin it in these fixtures:

| vector | strings | sum | pinned by |
|---|---|---|---|
| `fingerprint-one` | `code=91936005` | 259087979045763 | `fingerprint-keys`, the procedure |
| `fingerprint-key-active` | `code=91936005`, `effectiveTime=20250327120000+0000`, `status=active` | 506034893686827 | `fingerprint-keys`, the first problem |
| `fingerprint-key-active-reordered` | key-active's, in another order | 506034893686827 | `values-in-another-order-name-one-record`: two statements whose values come in another order name one record; the sum itself is pinned by `fingerprint-keys`, the first problem |
| `fingerprint-key-active-repeated` | key-active's, `code=91936005` twice | 506034893686827 | `a-value-stated-twice-names-the-record-of-it-stated-once` |
| `fingerprint-key-resolved` | key-active's, `status=resolved` for `status=active` | 485897515424792 | `fingerprint-keys`, the second problem |
| `fingerprint-key-immunization` | `code=141`, `effectiveTime=20241015` | 116633954584022 | `fingerprint-keys`, the immunization |
| `fingerprint-members` | `urn:hl7-org:v3code@http://sparql.xyz/facade-x/data/nullFlavor=UNK`, `urn:hl7-org:v3originalText=left knee pain` | 334992598836920 | none: a statement's members include its `templateId` |
| `fingerprint-empty` | none | 0 | none: a statement with no key field has no key fingerprint |

## Codes

A code is its `code` and its `codeSystem`, an OID. A code's IRI is the stem
`../vocab/ccda-code-systems.ttl` gives its OID, then the code percent-encoded.
The stem is cascade-vocabulary's `void:uriSpace`, as its `decisions/code-iris.md`
rules it, and the FHIR URI is the system's `cascade:codingSystemUri`. A stem is never the FHIR URI the same concept names:
FHIR R5 says "there is no simple formula for determining the correct IRI stem
from a Coding.system" ([RDF](https://hl7.org/fhir/R5/rdf.html#iri-stem), read on
2026-10-10). The table holds the OIDs this release knows. A
`translation` is the same concept in another code system. A status, a severity,
a criticality and an allergy's type are SNOMED CT or HL7 codes, and reach the
vocabulary's FHIR codes through the concept maps in `../vocab/`.

An NDC is the exception to "then the code": a C-CDA writes it as a labeler
gives it, the 10-digit label code with its hyphens ([NDC](https://hl7.org/fhir/R4/ndc.html)),
and Cascade's is 11 digits, so a code is normalised into the stem
`https://ns.cascadeprotocol.org/codes/ndc11/`. Five forms are carried: 11
digits as written; 5-4-2 with its hyphens removed; 4-4-2, 5-3-2 and 5-4-1 with
a `0` added to the segment short of a digit (the labeler, the product, the
package). Ten digits with no hyphens cannot be told apart, and neither can any
other value: it is no code, and a finding. An NDC is a medication's code only:
an allergen or a reaction coded by NDC is a finding, never a code, since an
NDC names a packaged product and not the substance a person reacts to.

Epic writes a code system as `urn:oid:` and the OID, which CDA's schema refuses;
the mappings read the OID after the prefix.

An RxNorm code and a LOINC code are written under their stems wherever they
stand: a portal often codes a drug or a test in its own code system and gives
the RxNorm or LOINC code as a `translation`.

An immunization's `vaccineCode` is written as the first CVX code it carries, the `code` before a `translation`, and no other.

## Values

An observation's `value` is typed by its `xsi:type`. A `PQ` is a number as
written and a unit, an `INT` or a `REAL` a number, an `ST` a text, and a `CD`,
`CE`, `CV` or `CO` a code with its name. A result carries each of these as its
source wrote it; any other type, an `IVL_PQ` or an `RTO` among them, is a
finding.

## Timestamps

A `ts` is `YYYYMMDDHHMMSS.UUUU[+|-ZZzz]`, digits left off the right to state
less precision. A time stating the minute or the second is an `xsd:dateTime`,
and one stating a day or an hour an `xsd:date`, each with its offset where it
states one. One stating less than a day fits no Cascade date and is not carried.

## Narrative references

A section's `text` is its narrative, the human-readable copy of its entries,
whose elements may carry an `ID`. An entry points into it with a `reference`
whose `value` is `#` and that `ID`, from a statement's `text` or a code's
`originalText`. An allergen's, a drug's and a test's name, a coded result and a
reference range's text are each read through such a reference first, where
the element it points to holds one run of text. One holding markup, a
`content` inside a `td` among them, is passed over for the next place the name
is stated, so a name is never cut short. A reference names an element only as
`#` and that element's `ID`, whitespace around the value aside: one with no
`#`, or with nothing after it, names none. An `ID` that two elements hold names neither: the CDA schema makes an
`ID` unique within a document, so a document that repeats one gives no ground
for choosing, and the name is read from the next place it is stated. A
portal's next download of one document may number the `ID`s afresh, so neither
an `ID` nor a reference is part of a key or a member. A reference through which
nothing can be read, one naming no element or naming one that does not hold
exactly one run of text and nothing else, is a finding on its entry,
`ccda:referenceReadsNothing`.

## The schema

HL7's CDA schema with the SDTC extensions, eight files under `../schema/`,
`infrastructure/cda/CDA_SDTC.xsd` its entry point. It checks structure, data
types and vocabulary domains, and no C-CDA template: Schematron is out of
scope. A Bridge checks a `ts` against only part of its pattern
([jayostis/cascade-bridge-rs#75](https://github.com/jayostis/cascade-bridge-rs/issues/75)).

## The committed inputs, and what is known about them

The copied inputs are the conformance corpus's C-CDA fixtures, written by hand
for it, not downloaded from a portal. None names a custodian or an author, so
each fails the schema at its first `component`. In each of the five that hold
an allergy, the allergy's observation sits directly in its concern act rather
than in an `entryRelationship`, which CDA does not allow; the mappings read it
there too. None holds a procedure; the procedures are authored.
