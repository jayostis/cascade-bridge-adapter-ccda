# in — Agent Context

The mapping: the queries a Bridge runs over each record, which the crate lists by role.

## A name's text is the vocabulary's rule body, copied

Each naming rule body in `sparql/` (a `CONCAT` starting with the rule's namespace UUID and IRI) is the body
of that rule's `.rq` in cascade-vocabulary's `tests/vectors/naming/`, byte for byte but for the expression put
in place of each `?inputN` and the line breaks. A body is pasted from there, never retyped.

## Checks CI cannot run

- Every rule body is still the vocabulary's. From the repository root, with the vocabulary checked out beside
  it as `../cascade-vocabulary` (the checkout the compatibility check pairs):

  ```
  python3 - <<'EOF'
  import pathlib, re, sys

  vectors = pathlib.Path("../cascade-vocabulary/tests/vectors/naming")
  if not vectors.is_dir():
      sys.exit("skipped: no ../cascade-vocabulary checkout beside this one, so no rule body to compare")
  bad = 0
  for query in sorted(pathlib.Path("in/sparql").glob("*.rq")):
      text = query.read_text(encoding="utf-8")
      for rule in sorted(set(re.findall(r"cascade#(\w+NamingRule)\"", text))):
          vector = (vectors / f"{rule}.rq").read_text(encoding="utf-8")
          body = vector[vector.index("CONCAT("):vector.index(")) AS ?hash)") + 1]
          pattern = r"\s*".join(re.escape(part) if not part.startswith("?input") else r"(?:[^,()]|\([^()]*\))+?"
                                for part in re.split(r"\s+|(\?input\d)", body) if part)
          found = re.findall(r"CONCAT\(\"[^\"]*cascade#" + rule + r"\"", text)
          matched = re.findall(pattern, text)
          print(f"{query.name} {rule}: {len(matched)} of {len(found)} bodies as the vocabulary writes them")
          bad += len(matched) != len(found)
  sys.exit(1 if bad else 0)
  EOF
  ```
