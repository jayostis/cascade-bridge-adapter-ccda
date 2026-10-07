# fixtures — Agent Context

The cases a Bridge's harness runs, and the inputs and expected outputs they name.
Nothing here executes; `manifest.ttl` declares the cases and the rule each is
judged by, and the crate records where every file came from.

## Every byte is recorded, and inputs are never edited

Every file under `in/`, `facts/`, `expected/` and `findings/` has its digest in the crate,
and `.gitattributes` and `.editorconfig` protect them from normalisation. A
change updates the crate's digest, size and description in the same commit.

An input is one of two kinds, and the crate says which:

- **Copied**: from `../../conformance`, `fixtures/ccda/` at the commit the
  crate's `isBasedOn` names, under the same file name, byte for byte, with a
  `sameAs` to its blob. None names a custodian or an author, so each fails the
  CDA schema, and its findings say where.
- **Authored here**: written for a case the conformance corpus does not hold,
  with the date it was written. Each validates against the CDA schema. An
  authored input is edited only by replacing it, as a new file under a new name.

An input is committed once. A case that needs the same bytes twice names one
file in both of its entries.

A findings file is a Bridge's own `convert --findings` output over the input
beside it, committed unedited, and compared as a graph, never as bytes. An
expected graph is checked by hand against the specification's rules and the
input, a record's name recomputed outside SPARQL from its inputs.

An identity relation names a record by its arrival's selector, the clinical
statement's XPath from the document element.

## Checks CI cannot run

- Each `sameAs` copy is byte-identical to conformance. Compare against the
  **blobs**, never the worktree: a clone with `core.autocrlf=true` holds those
  files as CRLF, and "fixing" that would break the recorded digests.

  ```
  git -C ../../conformance show <commit>:fixtures/ccda/X.xml | cmp - in/X.xml
  ```
- Each authored input validates against `../schema/infrastructure/cda/CDA_SDTC.xsd`.
