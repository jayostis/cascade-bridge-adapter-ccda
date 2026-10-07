# vocab — Agent Context

This adapter's own namespace, `https://ns.cascadeprotocol.org/adapter/ccda/v1-draft#`,
prefix `ccda:`. No Cascade term is minted here.

## A lookup table is a concept map, and its rows are transcribed

What a concept map holds, and the form a `skos:notation` is written in, is
[`shapes/concept-map.shapes.ttl`](https://github.com/jayostis/cascade-bridge-spec/blob/main/shapes/concept-map.shapes.ttl)'s
to say, and a failing run prints it.

- A FHIR code a map leads to is written as an IRI: its code system's URI, `/`
  and the code. The mapping writes the code alone, as the vocabulary's shapes
  take it.
- **A row is transcribed, never invented.** Adding one, removing one or changing
  what a code maps to changes what this adapter carries; the crate's
  `schema:isBasedOn` for the file says where the rows came from, HL7's C-CDA on
  FHIR concept maps for the statuses and HL7 Terminology for the code systems.
- **No accounting entry names a map.** A C-CDA path holds the values of every
  observation nested at that depth, a status, a severity and a reaction alike,
  so a `bridge:lookupIn` on it would report each as outside the others' maps. A
  findings query names the map instead, by the nested observation's template.

## A gap is a kind of problem, never an instance of one

`ccda-gaps.ttl` is the scheme the crate names as `bridge:gapScheme`, and the
only place a findings query may take a body from.

- A `skos:prefLabel` says what the source carries and that nothing carries it
  across. It names no value read from a record, no id, no date and no list: a
  value the rule fired on is the finding's `sh:value`, and which node it is
  about is the finding's selector.
- Two sentences that differ only by a value are one gap.
- Every `skos:broader` names a concept of the specification's `bridge:gapKinds`.

A body a findings query constructs is a gap of this scheme, so a findings query,
the `fixtures/findings/` files and `ro-crate-metadata.json` change in the same
commit. A gap nothing names at all, no query and no entry, is dead, and goes.

## A verdict on a path is read, never inferred from its name

The source accounting holds one `bridge:PathEntry` for each path a mapping
reads. A path runs from the `ClinicalDocument` down, each step in its namespace,
and carries no position and no section: one path holds an allergy's value and a
problem's alike, so a verdict is settled against `../in/sparql/`, and a section
this release does not map is a finding of `section-findings.rq`, not of the
accounting.
