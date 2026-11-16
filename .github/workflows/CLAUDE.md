# workflows — Agent Context

`validate.yml` and `ready.yml` have no logic on purpose and must not grow any.
The checks live in the Cascade Bridge Specification and are published from it as
the `start` action, which picks the version of each repository when the run
starts and runs the specification's checks at it. A check that needs writing is
a change to the specification, made there; no file here names a version of it.

`adapter` and `ready-to-merge` are required status checks on `main`, matched by
name: renaming either silently drops it from the merge gate, and `ready-to-merge`
is the job of `ready.yml`, not of `validate.yml`. `rerun-when-edited` is not
required, and must not be. No job `needs:` another; a job skipped
because its dependency failed counts as passing.

`validate.yml` does not run on `edited`: `ready.yml` does, and its
`rerun-when-edited` job re-runs `validate.yml` only when the edit changed a
`Depends-On:` line or the base. Keep it a job of its own, with no checkout and no
`concurrency`.

The `adapter` job lints the package, then runs each engine `compatibility.json`
names on it and judges the report. Executing the fixtures stays a Bridge's job:
nothing here runs a mapping or compares a graph.
