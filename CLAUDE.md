# cascade-bridge-adapter-ccda — Agent Context

The Cascade Bridge Adapter for C-CDA R2.1 XML: a package of data a **Cascade
Bridge** runs to turn a C-CDA `ClinicalDocument` into Cascade records.
Import-only. Its mapping is SPARQL queries in `in/sparql/`, which a Bridge runs
over the whole document, the one source record a C-CDA is.

The contract is the **Cascade Bridge Specification**, [cascade-bridge-spec](https://github.com/jayostis/cascade-bridge-spec).
Dependencies point one way: an adapter knows about the specification, and the
specification knows nothing about any adapter. The scope of the first release is
[issue #1](https://github.com/jayostis/cascade-bridge-adapter-ccda/issues/1),
the layout the README's. Do not re-derive them.

## The rules

- **No code.** Markdown, JSON, JSON-LD, YAML, Turtle, SPARQL, XML Schema.
  Nothing that executes, in any directory. An adapter is data; the thing that
  runs it is a Bridge. If something seems to need code, it is a finding for the
  specification. The lint measures this rather than taking it on trust.
- **The manifest is the crate.** `ro-crate-metadata.json` is both the adapter's
  manifest and the provenance record for every file and dataset.
- **No test code lives here; `compatibility.json` names the engines that must
  pass it, and CI runs those.** Fixtures and how to judge them are declared as
  data in `fixtures/manifest.ttl`; a Bridge's harness executes them.
- **No copy of the specification.** The `bridge:` vocabulary and its SHACL shapes
  live in `cascade-bridge-spec`. To change one, change it there.
- **No Cascade terms are minted here.** The terms this adapter writes are
  [cascade-vocabulary](https://github.com/jayostis/cascade-vocabulary)'s, the
  repository the crate's `bridge:cascadeVocabularyRepository` names. A value with no term
  there goes in the adapter's own namespace (`vocab/`) or is reported as a
  finding; a missing term is added in that repository.
- **A record is a clinical statement, never the act wrapping it,** and its
  name is the specification's
  ([Naming a C-CDA record](https://github.com/jayostis/cascade-bridge-spec/blob/main/engine/sparql.md#naming-a-c-cda-record)).
  The key fields and member exclusions of each class are declared once, in
  `in/sparql/document-table.rq`.

## Before pushing

CI runs the specification's lint at the version it picks when it starts;
`adapter/validation.md` there says what it checks. By hand, what
`fixtures/CLAUDE.md` and `schema/CLAUDE.md` say CI cannot run. A commit says
which ran.

## Where a rule goes

This file holds what has to be known *before* choosing a directory to open.
Everything else belongs in a `CLAUDE.md` in the directory it governs, which loads
only when that directory is touched. Keep this file under 80 lines.

## Conventions

- Conventional commits: `feat(adapter): ...`, `docs: ...`, `fix(fixtures): ...`.
- Impersonal: findings and decisions, not promises by a person.
- **Say it once.** A fact in the crate, the vocabulary or the specification is
  linked, never restated: two statements of one contract can disagree, and have.
- **No archaeology.** What a file used to be, and what changed in a move, is
  git's job. Not a header, not a comment.
- **Why, never what.** A comment restating the line below it goes. A reason that
  belongs to a term goes in its `rdfs:comment` or `sh:description`, where it is
  machine-readable, not in a header block above it.
- Every fact copied from HL7 or a sibling repository names its source and date.
