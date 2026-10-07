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
takes. Both are one kind of record, told apart by their intent. A Result
Organizer is a panel, and no record; each Result Observation in it is one, and
any other statement in it, a Vital Sign Observation (`4.27`) among them, is a
finding.

The class is the FHIR resource type a record of its kind is mapped from, and
one input of its name ([Naming a C-CDA record](https://github.com/jayostis/cascade-bridge-spec/blob/main/engine/sparql.md#naming-a-c-cda-record)).
A statement's selector refines the document element's by
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
so a record is named from its id only where no other record of its class in the
document carries that id with another key, and otherwise from a key of its
class's fields, as the specification's rows say. The key fields are declared in
`../in/sparql/document-table.rq`.

A `nullFlavor` stands where a value would: on an `id`, a `code`, a `value` or a
time. Where it stands alone, nothing is carried.

## Codes

A code is its `code` and its `codeSystem`, an OID. A code's IRI is the URI FHIR
names its code system by, `/` and the code, as the FHIR R4 adapter writes one;
`../vocab/ccda-code-systems.ttl` holds the OIDs this release knows. A
`translation` is the same concept in another code system. A status, a severity,
a criticality and an allergy's type are SNOMED CT or HL7 codes, and reach the
vocabulary's FHIR codes through the concept maps in `../vocab/`.

Epic writes a code system as `urn:oid:` and the OID, which CDA's schema refuses;
the mappings read the OID after the prefix.

An RxNorm code and a LOINC code are written in the IRI space the vocabulary
names for each, `http://www.nlm.nih.gov/research/umls/rxnorm/` and
`http://loinc.org/rdf/`, wherever they stand: a portal often codes a drug or a
test in its own code system and gives the RxNorm or LOINC code as a
`translation`.

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
reference range's text are each read through such a reference first. A
portal's next download of one document may number the `ID`s afresh, so neither
an `ID` nor a reference is part of a key or a member.

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
