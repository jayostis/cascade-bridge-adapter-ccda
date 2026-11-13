# Contributing to cascade-bridge-adapter-ccda

Thank you for helping. This repository is the Cascade Bridge Adapter for C-CDA R2.1 XML: the package of data a Cascade
Bridge runs to turn a C-CDA `ClinicalDocument` into Cascade records. There is no code here, only mappings, schemas,
fixtures and a manifest. [`README.md`](README.md) names the parts, and [`CLAUDE.md`](CLAUDE.md) holds the rules a change
here follows; read it before you change a mapping, a fixture or the manifest.

The contract is the [Cascade Bridge Specification](https://github.com/jayostis/cascade-bridge-spec), and the terms the
adapter writes are [cascade-vocabulary](https://github.com/jayostis/cascade-vocabulary)'s. Where either is silent or
wrong, the fix is a pull request there, not a copy or a new term here.

Report a security problem privately, by email to contact@cascadeprotocol.org, never in a public issue.

## Set up

You need git. Nothing is installed to work on the adapter itself.

```sh
git clone git@github.com:<you>/cascade-bridge-adapter-ccda.git
cd cascade-bridge-adapter-ccda
```

The checks are the specification's, and they run in CI. To run the adapter lint yourself you need Python 3.12 and a
checkout of [cascade-bridge-spec](https://github.com/jayostis/cascade-bridge-spec);
[`adapter/validation.md`](https://github.com/jayostis/cascade-bridge-spec/blob/main/adapter/validation.md) there gives
the command and says what it checks. Running a mapping over a fixture is a Bridge's job: the one that must pass is
named in [`compatibility.json`](compatibility.json), and CI runs it.

The naming rules in `in/sparql/` are copied from cascade-vocabulary, so some checks read it as a sibling folder: clone
[cascade-vocabulary](https://github.com/jayostis/cascade-vocabulary) beside this repository, as
[`in/CLAUDE.md`](in/CLAUDE.md) says the compatibility check does.

## What a pull request must pass

CI runs on every pull request. Both of these are required status checks on `main`, so do not rename a job.

- **`adapter`**: lints the package, then runs each Bridge `compatibility.json` names over it and judges the report.
- **`ready-to-merge`**: holds a pull request until every pull request it depends on can merge (see "A change that spans
  two repositories").

The workflows hold no logic of their own, by design. A check that needs writing is a change to the specification, made
there.

By hand, [`in/CLAUDE.md`](in/CLAUDE.md), [`fixtures/CLAUDE.md`](fixtures/CLAUDE.md) and
[`schema/CLAUDE.md`](schema/CLAUDE.md) each list what CI cannot run for that directory, such as that every naming rule
is still the vocabulary's and every copied fixture is byte-identical to its source. Say in the commit which of them you
ran.

## Commits and pull requests

Use conventional commits: `feat(adapter): ...`, `docs: ...`, `fix(fixtures): ...`. A fact copied from HL7 or a sibling
repository names its source and date. Do not put a closing keyword (`closes`, `fixes`, `resolves`) before an issue the
pull request does not finish: GitHub closes it whatever the rest of the sentence says.

Every file has its digest and origin in [`ro-crate-metadata.json`](ro-crate-metadata.json), the adapter's manifest. A
change to a file updates its entry in the same commit, and a fixture input is never edited: a different input is a new
file under a new name.

## A change that spans two repositories

Nothing here pins another repository. A change that must land here and in another, usually the Bridge, the vocabulary
or the specification, is a set of pull requests, each naming the others it needs in its description on a line of its
own, with the full URL:

```
Depends-On: https://github.com/jayostis/cascade-bridge-rs/pull/123
```

The `adapter` check then runs the named pull requests together, and `ready-to-merge` holds each until the others can
merge. A pull request that names none is tried against the other repository's branch of the same name as the branch it
targets, and failing that its default branch. A change to a named pull request retests nothing: re-run the dependent
pull request's workflow with `gh run rerun`. Do the same after editing the description of your own pull request from a
fork: a fork's token is read-only, so the edit re-runs nothing.

A named pull request must be from a branch of its repository itself: one from a fork fails the check. A contributor
without write access to the other repository asks a maintainer to open the counterpart.

The full rules are in the specification's
[`compatibility.md`](https://github.com/jayostis/cascade-bridge-spec/blob/main/compatibility.md).

## Licence

Apache-2.0 for the package. HL7's CDA schema is under the 4-clause BSD licence, its notices intact in each file; each
file's licence is in [`ro-crate-metadata.json`](ro-crate-metadata.json).
