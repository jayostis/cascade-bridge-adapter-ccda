window.BENCHMARK_DATA = {
  "lastUpdate": 1795146524370,
  "repoUrl": "https://github.com/jayostis/cascade-bridge-adapter-ccda",
  "entries": {
    "Bridge performance": [
      {
        "commit": {
          "author": {
            "email": "jayostis@gmail.com",
            "name": "jayostis",
            "username": "jayostis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f03627b3cf6cbd3e66bddb6a4bca77c52bf31622",
          "message": "Merge pull request #87 from jayostis/feat/perf-files\n\nci(perf): a performance file for each main run",
          "timestamp": "2026-11-19T12:59:43-08:00",
          "tree_id": "9e7a7943474096e71590f72fe7eff6ca3274cd05",
          "url": "https://github.com/jayostis/cascade-bridge-adapter-ccda/commit/f03627b3cf6cbd3e66bddb6a4bca77c52bf31622"
        },
        "date": 1795122009033,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.421734,
            "range": "0.420985-0.42742",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.239549,
            "range": "0.232259-0.246421",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.459089,
            "range": "0.459089-0.459089",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 370860032,
            "range": "362250240-372178944",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.087358,
            "range": "0.087358-0.087358",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.000332,
            "range": "0.000332-0.000332",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000323,
            "range": "0.000323-0.000323",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001202,
            "range": "0.001202-0.001202",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.00067,
            "range": "0.00067-0.00067",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.012148,
            "range": "0.012148-0.012148",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.00192,
            "range": "0.00192-0.00192",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000241,
            "range": "0.000241-0.000241",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.000689,
            "range": "0.000689-0.000689",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.00612,
            "range": "0.00612-0.00612",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.004407,
            "range": "0.004407-0.004407",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.002388,
            "range": "0.002388-0.002388",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.005806,
            "range": "0.005806-0.005806",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.019757,
            "range": "0.019757-0.019757",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000277,
            "range": "0.000277-0.000277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000494,
            "range": "0.000494-0.000494",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000388,
            "range": "0.000388-0.000388",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.001691,
            "range": "0.001691-0.001691",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.00292,
            "range": "0.00292-0.00292",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.001596,
            "range": "0.001596-0.001596",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.000804,
            "range": "0.000804-0.000804",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.001809,
            "range": "0.001809-0.001809",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000368,
            "range": "0.000368-0.000368",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000068,
            "range": "0.000068-0.000068",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.002398,
            "range": "0.002398-0.002398",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.001387,
            "range": "0.001387-0.001387",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.012105,
            "range": "0.012105-0.012105",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000398,
            "range": "0.000398-0.000398",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.007998,
            "range": "0.007998-0.007998",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.090216,
            "range": "0.090216-0.090216",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.057938,
            "range": "0.057938-0.057938",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.023802,
            "range": "0.023802-0.023802",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.001119,
            "range": "0.001119-0.001119",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.00006,
            "range": "0.00006-0.00006",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.020545,
            "range": "0.020545-0.020545",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.056486,
            "range": "0.056486-0.056486",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.027049,
            "range": "0.027049-0.027049",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.106485,
            "range": "0.106485-0.106485",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.029596,
            "range": "0.029596-0.029596",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.012718,
            "range": "0.012718-0.012718",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.008041,
            "range": "0.008041-0.008041",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.000937,
            "range": "0.000937-0.000937",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.008942,
            "range": "0.008942-0.008942",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.015156,
            "range": "0.015156-0.015156",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda/load",
            "value": 0.731409,
            "range": "0.730826-0.736337",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.005345,
            "range": "0.005343-0.007177",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.726064,
            "range": "0.723649-0.730994",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.00431,
            "range": "0.004299-0.004401",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.017109,
            "range": "0.01689-0.022553",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001138,
            "range": "0.001089-0.013259",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f03627b3cf6cbd3e66bddb6a4bca77c52bf31622",
          "message": "Merge pull request #87 from jayostis/feat/perf-files\n\nci(perf): a performance file for each main run",
          "timestamp": "2026-11-19T20:59:43Z",
          "url": "https://github.com/jayostis/cascade-bridge-adapter-ccda/commit/f03627b3cf6cbd3e66bddb6a4bca77c52bf31622"
        },
        "date": 1795146524112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.543715,
            "range": "0.498866-0.54525",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.201608,
            "range": "0.186331-0.216602",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.349686,
            "range": "0.349686-0.349686",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 370630656,
            "range": "338497536-372555776",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.072578,
            "range": "0.072578-0.072578",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.000238,
            "range": "0.000238-0.000238",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000216,
            "range": "0.000216-0.000216",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001043,
            "range": "0.001043-0.001043",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.000502,
            "range": "0.000502-0.000502",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.009736,
            "range": "0.009736-0.009736",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.001567,
            "range": "0.001567-0.001567",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000222,
            "range": "0.000222-0.000222",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.000557,
            "range": "0.000557-0.000557",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.00451,
            "range": "0.00451-0.00451",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.003073,
            "range": "0.003073-0.003073",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.001826,
            "range": "0.001826-0.001826",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.004419,
            "range": "0.004419-0.004419",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.014685,
            "range": "0.014685-0.014685",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000361,
            "range": "0.000361-0.000361",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000615,
            "range": "0.000615-0.000615",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000483,
            "range": "0.000483-0.000483",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.0024,
            "range": "0.0024-0.0024",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.00323,
            "range": "0.00323-0.00323",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.002144,
            "range": "0.002144-0.002144",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.001019,
            "range": "0.001019-0.001019",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.00235,
            "range": "0.00235-0.00235",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000494,
            "range": "0.000494-0.000494",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000094,
            "range": "0.000094-0.000094",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.003018,
            "range": "0.003018-0.003018",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.00113,
            "range": "0.00113-0.00113",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.014317,
            "range": "0.014317-0.014317",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000585,
            "range": "0.000585-0.000585",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.006489,
            "range": "0.006489-0.006489",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.074654,
            "range": "0.074654-0.074654",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.041468,
            "range": "0.041468-0.041468",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.018209,
            "range": "0.018209-0.018209",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.00093,
            "range": "0.00093-0.00093",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.000067,
            "range": "0.000067-0.000067",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.0157,
            "range": "0.0157-0.0157",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.043046,
            "range": "0.043046-0.043046",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.021175,
            "range": "0.021175-0.021175",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.062279,
            "range": "0.062279-0.062279",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.035544,
            "range": "0.035544-0.035544",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.010709,
            "range": "0.010709-0.010709",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.00653,
            "range": "0.00653-0.00653",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.000755,
            "range": "0.000755-0.000755",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.006869,
            "range": "0.006869-0.006869",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.011751,
            "range": "0.011751-0.011751",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda-entries-x50/convert/first",
            "value": 1.227721,
            "range": "1.188383-1.238513",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 50 times, as one document. sha256 74d7ceb7fbc39145ce2f7d8c2aca5f71848dc80ced2ebbdf76ed795b43ba7f62, 667684 bytes"
          },
          {
            "name": "ccda-entries-x50/convert/second",
            "value": 0.928499,
            "range": "0.911184-0.928968",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x50/convert/profiled",
            "value": 1.198352,
            "range": "1.198352-1.198352",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x50/rss",
            "value": 386940928,
            "range": "358408192-452268032",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x50/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 50 times, as one document."
          },
          {
            "name": "ccda-entries-x50/triples",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x50/findings",
            "value": 453,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x50/query-time/document-table.rq",
            "value": 0.230699,
            "range": "0.230699-0.230699",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy.rq",
            "value": 0.000818,
            "range": "0.000818-0.000818",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition.rq",
            "value": 0.000801,
            "range": "0.000801-0.000801",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-organizations.rq",
            "value": 0.001038,
            "range": "0.001038-0.001038",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/immunization.rq",
            "value": 0.001537,
            "range": "0.001537-0.001537",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication.rq",
            "value": 0.025032,
            "range": "0.025032-0.025032",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/note-or-document.rq",
            "value": 0.004148,
            "range": "0.004148-0.004148",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient.rq",
            "value": 0.000259,
            "range": "0.000259-0.000259",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/procedure.rq",
            "value": 0.002379,
            "range": "0.002379-0.002379",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/record.rq",
            "value": 0.013544,
            "range": "0.013544-0.013544",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report.rq",
            "value": 0.009218,
            "range": "0.009218-0.009218",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-identifiers.rq",
            "value": 0.006199,
            "range": "0.006199-0.006199",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-quantities.rq",
            "value": 0.013705,
            "range": "0.013705-0.013705",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result.rq",
            "value": 0.044291,
            "range": "0.044291-0.044291",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy-findings.rq",
            "value": 0.00099,
            "range": "0.00099-0.00099",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition-findings.rq",
            "value": 0.002048,
            "range": "0.002048-0.002048",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-findings.rq",
            "value": 0.00097,
            "range": "0.00097-0.00097",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-findings.rq",
            "value": 0.005957,
            "range": "0.005957-0.005957",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-statement-findings.rq",
            "value": 0.009959,
            "range": "0.009959-0.009959",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication-findings.rq",
            "value": 0.011132,
            "range": "0.011132-0.011132",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/name-findings.rq",
            "value": 0.00485,
            "range": "0.00485-0.00485",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/narrative-findings.rq",
            "value": 0.004901,
            "range": "0.004901-0.004901",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/organization-findings.rq",
            "value": 0.00107,
            "range": "0.00107-0.00107",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient-findings.rq",
            "value": 0.000161,
            "range": "0.000161-0.000161",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/reference-findings.rq",
            "value": 0.010759,
            "range": "0.010759-0.010759",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report-and-note-findings.rq",
            "value": 0.004003,
            "range": "0.004003-0.004003",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-findings.rq",
            "value": 0.045337,
            "range": "0.045337-0.045337",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/section-findings.rq",
            "value": 0.001723,
            "range": "0.001723-0.001723",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/detect.rq",
            "value": 0.004685,
            "range": "0.004685-0.004685",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/stage/document-table",
            "value": 0.237678,
            "range": "0.237678-0.237678",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x50/stage/lift",
            "value": 0.147893,
            "range": "0.147893-0.147893",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x50/stage/source-validation",
            "value": 0.05469,
            "range": "0.05469-0.05469",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x50/stage/accounting",
            "value": 0.00072,
            "range": "0.00072-0.00072",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x50/stage/dataset",
            "value": 0.000047,
            "range": "0.000047-0.000047",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x50/stage/index",
            "value": 0.042864,
            "range": "0.042864-0.042864",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x50/stage/mapping",
            "value": 0.124712,
            "range": "0.124712-0.124712",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x50/stage/records",
            "value": 0.17777,
            "range": "0.17777-0.17777",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x50/stage/output-validation",
            "value": 0.201505,
            "range": "0.201505-0.201505",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x50/stage/findings",
            "value": 0.110231,
            "range": "0.110231-0.110231",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x50/stage/unresolved-addresses",
            "value": 0.041148,
            "range": "0.041148-0.041148",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x50/stage/detect",
            "value": 0.004722,
            "range": "0.004722-0.004722",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x50/stage/summary",
            "value": 0.001826,
            "range": "0.001826-0.001826",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x50/stage/serialising",
            "value": 0.0184,
            "range": "0.0184-0.0184",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x50/stage/unaccounted",
            "value": 0.034147,
            "range": "0.034147-0.034147",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x50/output/graph",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 139d803f26e008902033b2b0e3393b1c53073557b209e9222053dbf3e93d0bfc"
          },
          {
            "name": "ccda-entries-x50/output/findings",
            "value": 5890,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 dc8c2917e358ee8ffbb751b8d416fb1827233ea00e53ae5c25be3b9d2d911b03"
          },
          {
            "name": "ccda-synthea-10y/convert/first",
            "value": 2.58795,
            "range": "2.55751-2.654667",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. Ten years of one Synthea person as a single C-CDA document. sha256 643c55e2e3db4e52974cdf202b7a9a2f0f1bcf72e47a64414e014ae8c1ccd361, 1226024 bytes"
          },
          {
            "name": "ccda-synthea-10y/convert/second",
            "value": 2.274248,
            "range": "2.263624-2.280747",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-synthea-10y/convert/profiled",
            "value": 2.545785,
            "range": "2.545785-2.545785",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/first",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/second",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-synthea-10y/rss",
            "value": 439136256,
            "range": "432971776-556335104",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-synthea-10y/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. Ten years of one Synthea person as a single C-CDA document."
          },
          {
            "name": "ccda-synthea-10y/triples",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-synthea-10y/findings",
            "value": 1234,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-table.rq",
            "value": 0.430901,
            "range": "0.430901-0.430901",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy.rq",
            "value": 0.006143,
            "range": "0.006143-0.006143",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition.rq",
            "value": 0.012192,
            "range": "0.012192-0.012192",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-organizations.rq",
            "value": 0.000505,
            "range": "0.000505-0.000505",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/immunization.rq",
            "value": 0.005285,
            "range": "0.005285-0.005285",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication.rq",
            "value": 0.02021,
            "range": "0.02021-0.02021",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/note-or-document.rq",
            "value": 0.00648,
            "range": "0.00648-0.00648",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient.rq",
            "value": 0.000403,
            "range": "0.000403-0.000403",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/procedure.rq",
            "value": 0.012877,
            "range": "0.012877-0.012877",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/record.rq",
            "value": 0.024661,
            "range": "0.024661-0.024661",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report.rq",
            "value": 0.011858,
            "range": "0.011858-0.011858",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-identifiers.rq",
            "value": 0.013346,
            "range": "0.013346-0.013346",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-quantities.rq",
            "value": 0.023605,
            "range": "0.023605-0.023605",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result.rq",
            "value": 0.11115,
            "range": "0.11115-0.11115",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy-findings.rq",
            "value": 0.005088,
            "range": "0.005088-0.005088",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition-findings.rq",
            "value": 0.005418,
            "range": "0.005418-0.005418",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-findings.rq",
            "value": 0.002186,
            "range": "0.002186-0.002186",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-findings.rq",
            "value": 0.012517,
            "range": "0.012517-0.012517",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-statement-findings.rq",
            "value": 0.01229,
            "range": "0.01229-0.01229",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication-findings.rq",
            "value": 0.00572,
            "range": "0.00572-0.00572",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/name-findings.rq",
            "value": 0.009129,
            "range": "0.009129-0.009129",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/narrative-findings.rq",
            "value": 0.045149,
            "range": "0.045149-0.045149",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/organization-findings.rq",
            "value": 0.000524,
            "range": "0.000524-0.000524",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient-findings.rq",
            "value": 0.000274,
            "range": "0.000274-0.000274",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/reference-findings.rq",
            "value": 0.021023,
            "range": "0.021023-0.021023",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report-and-note-findings.rq",
            "value": 0.005577,
            "range": "0.005577-0.005577",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-findings.rq",
            "value": 0.101331,
            "range": "0.101331-0.101331",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/section-findings.rq",
            "value": 0.003688,
            "range": "0.003688-0.003688",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/detect.rq",
            "value": 0.004523,
            "range": "0.004523-0.004523",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/stage/document-table",
            "value": 0.450109,
            "range": "0.450109-0.450109",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-synthea-10y/stage/lift",
            "value": 0.286225,
            "range": "0.286225-0.286225",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-synthea-10y/stage/source-validation",
            "value": 0.089261,
            "range": "0.089261-0.089261",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-synthea-10y/stage/accounting",
            "value": 0.001587,
            "range": "0.001587-0.001587",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-synthea-10y/stage/dataset",
            "value": 0.000046,
            "range": "0.000046-0.000046",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-synthea-10y/stage/index",
            "value": 0.092663,
            "range": "0.092663-0.092663",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-synthea-10y/stage/mapping",
            "value": 0.250254,
            "range": "0.250254-0.250254",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-synthea-10y/stage/records",
            "value": 0.520997,
            "range": "0.520997-0.520997",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-synthea-10y/stage/output-validation",
            "value": 0.403214,
            "range": "0.403214-0.403214",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-synthea-10y/stage/findings",
            "value": 0.244207,
            "range": "0.244207-0.244207",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-synthea-10y/stage/unresolved-addresses",
            "value": 0.09501,
            "range": "0.09501-0.09501",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-synthea-10y/stage/detect",
            "value": 0.004559,
            "range": "0.004559-0.004559",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-synthea-10y/stage/summary",
            "value": 0.003706,
            "range": "0.003706-0.003706",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-synthea-10y/stage/serialising",
            "value": 0.040317,
            "range": "0.040317-0.040317",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-synthea-10y/stage/unaccounted",
            "value": 0.063629,
            "range": "0.063629-0.063629",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-synthea-10y/output/graph",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4c682c9d7746d30c8e5fd69e73f2e02378d0d2906267d583be3e5c817fd47817"
          },
          {
            "name": "ccda-synthea-10y/output/findings",
            "value": 16083,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4221904ec50da3c9e16bf98c6659cc3722a491747b9df87e8ea8b45ae9327a5e"
          },
          {
            "name": "ccda/load",
            "value": 0.615906,
            "range": "0.605049-0.749429",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.005428,
            "range": "0.005216-0.008465",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.610691,
            "range": "0.599455-0.740964",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.003789,
            "range": "0.003625-0.004374",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.015178,
            "range": "0.013491-0.017408",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001078,
            "range": "0.000962-0.002401",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      }
    ]
  }
}