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
| a report | a Result Organizer (`4.1`), the entry's own statement in a Results section | `DiagnosticReport` |
| a note | a Note Activity (`4.202`), the entry's own statement in any section | `DocumentReference` |
| a note | an unstructured document's body, its `nonXMLBody` | `DocumentReference` |
| a note | a note section holding no entry: Assessment (`2.16.840.1.113883.10.20.22.2.8`), Assessment and Plan (`2.9`), Plan of Treatment (`2.10`), History of Present Illness (`1.3.6.1.4.1.19376.1.5.3.1.3.4`), Hospital Course (`1.3.6.1.4.1.19376.1.5.3.1.3.5`) | `DocumentReference` |

The organizations the header names are records too, outside the table's classes:
the custodian's `representedCustodianOrganization` and each author's
`representedOrganization`, each named by the vocabulary's
`OrganizationNamingRule` from one of its `id`s, as the vocabulary's
`decisions/naming.md` maps and picks it. HL7's CDA-to-FHIR identifier mapping
([C-CDA on FHIR, Mapping Guidance](https://hl7.org/fhir/us/ccda/en/mappingGuidance.html),
"CDA id → FHIR Identifier", read 2026-10-24) makes each `id` an identifier: a
root that FHIR's [identifier registry](https://hl7.org/fhir/R4/identifier-registry.html)
gives a URI is that URI, which for the organizations here is only the NPI's,
`2.16.840.1.113883.4.6` as `http://hl7.org/fhir/sid/us-npi`; a root and an
extension give the extension, typed by that URI, or else by `urn:oid:` and the
root (`urn:uuid:` and the root in lower case for a UUID root); a root alone
gives its `urn:oid:` or `urn:uuid:` IRI, typed `urn:ietf:rfc:3986`, except the
NPI's root alone, which is a system with no identifier. A root that is neither
an OID nor a UUID maps to none. Of the `id`s that map to one, the NPI names
the record, else the least by code point of type, then value, whatever order
the document lists them in, so the FHIR adapter names one NPI's organization
alike. The name hashes that type and value, as the version's `org:identifier`
states them. An element with no such `id` names no organization. The custodian
scope below is read from the `id` that names the custodian's organization, so
two documents listing one organization's `id`s in two orders scope their
records alike. One organization named by several elements
of a document, as custodian and author or by two authors, is one record with
one version, read from the custodian, else the first author; the document names
it once in each role, `cascade:CustodianRole` and `cascade:AuthorRole`. Another
element holding a name, an identifier or an address that version does not carry
is a finding, `ccda:duplicateOrganizationNotCarried`.

A section is mapped by its `templateId`: Allergies (`2.16.840.1.113883.10.20.22.2.6.1`),
Problems (`2.5.1`), Immunizations (`2.2.1`), Procedures (`2.7.1`), Medications
(`2.1.1`) and Results (`2.3.1`), each also by the root without `.1`, where its
entries are optional. A note section holding no entry, with no `nullFlavor` and a text holding more than whitespace,
is itself a note, and a section holding a Note Activity is carried for it. Every other section is a finding, vital
signs among them, and so is a note section holding entries, null-flavoured or empty, until a release maps it. An entry of a mapped section or of a Notes section (`2.16.840.1.113883.10.20.22.2.65`) holding a statement this
release does not read, a Procedure Activity Act or Observation among them, is a finding too.

A problem's status is its Problem Status Observation's, else, where it states none, its concern act's, by the map of
`../vocab/ccda-concern-statuses.ttl`, the same rows as an allergy's below, and never when it states
a Problem Status Observation, whatever the observation's code; its category is its section's, by the section's code. An
immunization whose `negationInd` is true was not done, whatever its
`statusCode` says.

An allergy's status is its Allergy Status Observation's, else, where it states none, its Allergy Concern
Act's `statusCode`, as C-CDA on FHIR has it: "`/statusCode` → `.clinicalStatus` is to be
used only if the C-CDA Allergy Status Observation (see below) is missing"
([Allergies](https://hl7.org/fhir/us/ccda/en/CF-allergies.html), read 2026-10-31).
That page publishes no map for the act's code, so the rows are the map HL7 publishes
for a problem's concern act ([ConditionClinicalStatus](https://hl7.org/fhir/us/ccda/en/ConceptMap-CF-ConditionClinicalStatus.html),
read 2026-10-31), `../vocab/ccda-allergy-concern-statuses.ttl`: `active` is
`active`, and `completed`, `aborted` and `suspended`, which HL7 marks wider, are
`inactive`. Any other code is the finding `ccda:allergyConcernStatusNotMapped`
where the allergy states no status observation of its own. An allergy that states one is
never read through its act: an observation outside the map is the finding
`ccda:allergyStatusNotMapped` and no status. A closed concern act is `inactive` even where the
allergy is still real, so an allergy a source closes by its act alone is absent from a view
of the active ones.

A Medication Activity's mood says what it is: `INT`, a medication intended, is
a prescription, and `EVN`, one taken, an entry on a list of what the person
takes. Both are one kind of record, told apart by their intent. One whose
`negationInd` is true says the medication is not taken, and is no record. Every
RxNorm and NDC code of its drug, the `code` and each `translation`, is carried;
a C-CDA marks none as the one a user chose, so none is the selected code.

A Result Organizer is a report, as C-CDA on FHIR maps it to a DiagnosticReport
([Results](https://hl7.org/fhir/us/ccda/en/CF-results.html), read 2026-10-30), and each Result Observation in it is
a lab result, which the report's version names by its record's IRI (`obo:RO_0002351`, "has member"); any other
statement in it, a Vital Sign Observation (`4.27`) among them, is a finding. Its code and translations are carried as
a test's are, its name is its code's `displayName`, its time its `effectiveTime`, else the period's `low` (FHIR's
`effectivePeriod.start`; the end is not carried), and its status is C-CDA on FHIR's report status map,
`../vocab/ccda-report-statuses.ttl`. A C-CDA states no time a report was issued and no category, so neither is
carried.

An Unstructured Document (`2.16.840.1.113883.10.20.22.1.10`,
[C-CDA 5.0.0](https://hl7.org/cda/us/ccda/StructureDefinition-UnstructuredDocument.html), read 2026-10-30) has a
`nonXMLBody` in place of sections: one `text`, either base64 data with its `mediaType`, or a `reference` to a file. Any
document with a `nonXMLBody` makes one note of it, whatever templates it claims. C-CDA on FHIR maps no unstructured
document, so the note borrows its Note Activity mapping: its type is the document's `code`, its type name that code's
`displayName`, its date the document's `effectiveTime`, its text the body's base64 decoded where it is plain text, and
the body is its one attachment, with its media type and the address of a file it only references. A PDF, any other
media type, and a referenced file are not read as text, and are the finding `ccda:noteDataNotRead`. The note is named
by the document's `setId` where it states one, else by its `id`: an amended document keeps its `setId` under a
new `id` and a higher `versionNumber`, so each amendment is a new version of the same note, and one document
imported twice is one note. Its version carries the document's `id` as its `cascade:noteOrDocumentMasterIdentifier`, mapped as a result's
ids are, as FHIR's `DocumentReference.masterIdentifier` holds it, so one document arriving through both adapters can
be joined. A section's note and a Note Activity carry no document id: each is a part of its document, not the
document itself. The `versionNumber` itself is not carried; the versions are ordered as the documents
arrive.

A Note Activity is a note, as C-CDA on FHIR maps it to a DocumentReference
([Notes](https://hl7.org/fhir/us/ccda/en/CF-notes.html), read 2026-10-30): its type is its code's translations
where it has one, else its code, the root code being always 34109-9, Note; its type name the first translation's
`displayName`, else the code's; its date its first author's `time`; its text the narrative its `text` references,
else its `text`'s own, else its `text`'s base64 decoded where it is plain text (no `mediaType`, or `text/plain`).
A base64 `text` is also the note's one attachment, with its media type. Base64 in any other media type, a PDF, RTF
or HTML among them, is not read as the note's text, since decoded HTML or RTF is markup, not the note's words: the
note carries the attachment's media type and no text, its bytes stay in the kept document, and it is the finding
`ccda:noteDataNotRead`, as is base64 the Bridge cannot decode. A note section's type is
its `code`, its type name the code's `displayName`, its title its `title`, its date the document's `effectiveTime`
and its text its `text`. A text is the Bridge's text of the element with a line for each block of the narrative
(each element the crate's `bridge:elementNameBreakingText` lists: NarrativeBlock's elements that are not inline,
its paragraphs, lists and items, tables and their parts, captions, footnotes and line breaks). A C-CDA note's
status is `current`: C-CDA states none other, and no document status, so none is carried. A note section's key
is its code and its text ([Names](#names)), so a source that sends one section again, unchanged, in a later document
sends the same note, a version for each document's date. One whose text has changed at all, grown by a visit or
only a typo fixed, is another note, and the earlier one stays its own record: the adapter joins no two texts, and
whether a later note of one type from one source supersedes an earlier one is the vocabulary's matcher's to rule.
Two identical note sections in one document are one note: the Bridge keeps one version (`bridge:versionNotKept`),
and the other's title is not carried.

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
time. On a result's first `value`, on a time a record's date is read from (an
`effectiveTime`, its `low` or its `high`) where no time is stated in its
place, on the patient's `birthTime` and `administrativeGenderCode`, and on the
`sdtc:deceasedTime` beside an `sdtc:deceasedInd` that is true, it is the reason
that value is absent:
the version carries a node `<version>#absent-` and the property's local name,
naming the property (`cascade:absentValueProperty`, a result's value being
`cascade:resultValueKind`) and the code as cascade-vocabulary's
`cascade:NullFlavor` writes it (`cascade:absentReasonCode`), never mapped to
another system (cascade-vocabulary's
`decisions/partial-dates-and-absent-reasons.md`). The seventeen codes are in
`../vocab/ccda-null-flavors.ttl`, read without regard to case; a flavour that is
none of them carries nothing and is a finding, `ccda:nullFlavorNotListed`, on a
result's value, on a time or a bound of it, and on the patient's. A medication
whose whole `effectiveTime` is a flavour has its start of use absent for it. On
an `id` or an address it says only that there is none, and elsewhere, where it
stands alone, nothing is carried: on an `sdtc:deceasedInd`, or a death time
with no true indicator, it states no death.

## Names

A record's name is one of cascade-vocabulary's naming rules, each the body of
its `tests/vectors/naming/<rule>.rq` there, copied into `../in/sparql/record.rq`
and hashed once for the rule picked. Two scopes say whose an id is: the
**custodian**, the `id` of
`custodian/assignedCustodian/representedCustodianOrganization` that names its
organization record, as above, as its root and extension (the NPI's URI as its
OID again, a UUID root in lower case), and the **patient**, the first usable
`id` of the `patientRole` of the document's one `recordTarget`, usable as the
section above says. A document with more than one `recordTarget` states no
patient scope.

| a statement | its rule | its inputs, after the rule |
|---|---|---|
| with an id, in both scopes | `RecordFromCcdaNamingRule` | the custodian's root and extension, the patient's root and extension, the statement's root and extension, an absent extension `""` |
| the patient, in both scopes | `RecordFromCcdaNamingRule` | as above, its own id as the patient's and the statement's |
| with no id, in both scopes | `RecordFromCcdaWithoutIdNamingRule` | the custodian's and the patient's root and extension, the IRI of its Cascade class, its key fingerprint or `""`, and its members fingerprint where it has no key fingerprint, else `""` |
| any other, the patient included | `RecordFromDocumentNamingRule` | the document's `ni:` name and the statement's selector |

A statement is named by the document where:

- the document's custodian has no `id` that names an organization, or the
  document states not exactly one patient with an id.
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
  - The text values the Bridge writes of an element (its text content, its text with element breaks, a base64
    attachment's decoded text) are not members: they restate the runs.
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
a criticality, an allergy's type and the patient's administrative gender are SNOMED CT or HL7 codes, and reach the
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

An allergen or a reaction is carried only under the code systems it was before
the table listed codes in other systems: RxNorm, SNOMED CT, LOINC, ICD-10-CM,
ICD-9-CM (`2.16.840.1.113883.6.103`), CPT, CVX and UNII. A code in any other
system, however the table lists it, is the finding `ccda:codeSystemNotMapped`.

Epic writes a code system as `urn:oid:` and the OID, which CDA's schema refuses;
the mappings read the OID after the prefix.

An RxNorm code and a LOINC code are written under their stems wherever they
stand: a portal often codes a drug or a test in its own code system and gives
the RxNorm or LOINC code as a `translation`.

An immunization's `vaccineCode` is written as the first CVX code it carries, the `code` before a `translation`, and no other.

A test's, a drug's, a problem's and a procedure's code and each of its
translations are carried, every one, except a procedure's CPT code, of which the vocabulary holds one: the first, the code's own before a translation's, is carried and each later CPT code that differs is a finding, `ccda:onlyFirstCarried`. A code in a system its kind has a term
for is that term's IRI: LOINC and SNOMED CT for a test, RxNorm and NDC for a
drug, SNOMED CT and ICD-10-CM for a problem, SNOMED CT and CPT for a procedure.
Any other is a literal, the code trimmed of spaces, typed by its system's URI,
on the kind's `cascade:testCodeInOtherSystem`, `medicationCodeInOtherSystem`,
`conditionCodeInOtherSystem` or `procedureCodeInOtherSystem` (cascade-vocabulary's
`decisions/code-iris.md`, the row "a code in a system the vocabulary lists no form
for"). The URI is the `cascade:codingSystemUri` the table gives the OID, so an
HCPCS code is typed `http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets`
and an ICD-9-CM code `http://hl7.org/fhir/sid/icd-9-cm` under any of its four
OIDs, and an OID the table does not hold is `urn:oid:` and the OID, read
without regard to the prefix's case. A SNOMED CT code of a drug stays a
literal while M16, how a drug's codes are matched (unruled, jayostis/cascade-vocabulary#286),
is open. A code
stated with no code system, or with one that is no OID, or a code system with
no code, or a code of spaces only, is not carried and is a finding, `ccda:codeNotCarried`, as an
immunization's code in a system other than CVX is.

A result's every `interpretationCode`, and each translation of one, in HL7
ObservationInterpretation (`2.16.840.1.113883.5.83`) is a
`cascade:resultInterpretationCode` IRI, its code as written, case kept,
percent-encoded; a flag in another system is not carried and is a finding,
`ccda:codeNotCarried`.

## Values

An observation's `value` is typed by its `xsi:type`. A `PQ` is a number as
written and a unit, an `INT` or a `REAL` a number, an `ST` a text, and a `CD`,
`CE`, `CV` or `CO` a code with its name. A result carries each of these as its
source wrote it; any other type, an `IVL_PQ` or an `RTO` among them, is a
finding.

## Timestamps

A `ts` is `YYYYMMDDHHMMSS.UUUU[+|-ZZzz]`, digits left off the right to state
less precision, and each time is typed by the precision it states, as
cascade-vocabulary's `decisions/partial-dates-and-absent-reasons.md` rules: a
year is an `xsd:gYear`, a month an `xsd:gYearMonth`, a day an `xsd:date`, and a
time stating the second an `xsd:dateTime`, each with its offset where it states
one and with none where it does not. A time stating the hour or the minute and
no second has no XSD form, so it is an `xsd:dateTime` padded with zeros to the
second, again with no offset invented, and the version carries a node
`<version>#padded-` and the property's local name, naming the property
(`cascade:paddedDateTimeProperty`) and the time exactly as it is written
(`cascade:writtenDate`), so its precision is never lost. Of the times a record's
date is read from, the first in the order its query says is carried, whatever
its precision.

## Narrative references

A section's `text` is its narrative, the human-readable copy of its entries,
whose elements may carry an `ID`. An entry points into it with a `reference`
whose `value` is `#` and that `ID`, from a statement's `text` or a code's
`originalText`. An allergen's, a drug's and a test's name, a coded result and a
reference range's text are each read through such a reference first: the
whole text of the element it points to, every text under it in document order,
as the Bridge's text with element breaks gives it, each break and each run of spaces of any kind (a no-break space
included) or controls one space, and trimmed of those and of format characters (a zero-width space among them):
`lisinopril <content>10 mg</content> tablet` is `lisinopril 10 mg tablet`, `Lisinopril<br/>10 mg tablet` is
`Lisinopril 10 mg tablet`, and a row `<td>Amlodipine</td><td>5 mg</td>` is `Amlodipine 5 mg`. A reference names an element only as
`#` and that element's `ID`, whitespace around the value aside: one with no
`#`, or with nothing after it, names none. An `ID` that two elements hold names neither: the CDA schema makes an
`ID` unique within a document, so a document that repeats one gives no ground
for choosing, and the name is read from the next place it is stated. A
portal's next download of one document may number the `ID`s afresh, so neither
an `ID` nor a reference is part of a key or a member. A reference through which
nothing can be read, one naming no element or naming one that holds no visible
character, is a finding on its entry,
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
