# workflows — Agent Context

`validate.yml` has no logic on purpose and must not grow any. The checks live in
the Cascade Bridge Specification and are published from it as the `start`
action, which picks the version of each repository when the run starts and runs
the specification's checks at it. A check that needs writing is a change to the
specification, made there; no file here names a version of it.

The job names are required status checks on `main`, matched by name: renaming
one silently drops it from the merge gate. No job `needs:` another; a job
skipped because its dependency failed counts as passing.

The `adapter` job lints the package, then runs each engine `compatibility.json`
names on it and judges the report. Executing the fixtures stays a Bridge's job:
nothing here runs a mapping or compares a graph.
