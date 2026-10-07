# schema — Agent Context

The eight XSDs here are HL7's CDA R2 schema with the SDTC extensions, from
HL7/CDA-core-2.0 `schema/extensions/SDTC/`, pinned byte for byte under the
layout HL7 publishes, so each `xs:include` and `xs:import` resolves as written.
`infrastructure/cda/CDA_SDTC.xsd` is the entry point and the crate's
`bridge:sourceSchema`. HL7's `README.md` there is not copied: it is not schema.

They are verbatim copies under HL7's 4-clause BSD licence, notices intact. Three
files, `NarrativeBlock.xsd`, `infrastructureRoot.xsd` and `voc.xsd`, carry no
notice and are taken under the same distribution. To change one, replace it from
the commit the crate names and update the crate's digest, size and description
in the same commit. HL7 publishes no digest, so the sha256 in the crate is the
only check:

```
git -C <a clone of HL7/CDA-core-2.0> show <commit>:schema/extensions/SDTC/<path> | sha256sum
```

A Bridge validates a `ts` against only part of its pattern
([jayostis/cascade-bridge-rs#75](https://github.com/jayostis/cascade-bridge-rs/issues/75)),
so a malformed timestamp may pass in a Bridge and fail in the lint.
