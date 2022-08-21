
---
title: Yutimim-dictionary-parser
type: page
---
# Yutimim-dictionary-parser

## Usage
```
# Output to screen
python3 main.py -i dict.txt -v
```

```
# Output to file
python3 main.py -i dict.txt -o dict.json
```

# Example

#### Input (Fake words)
```
auau-
   1. te de (v.)


eueue-
   1. ta da


jejj-
   1. to da (v.)


uueu-
   1. to do (v.)
```

#### Output
```
[
  { "word": "auau-", "defs": ["te de (v.)"] },
  { "word": "eueue-", "defs": ["ta da"] },
  { "word": "jejj-", "defs": ["to da (v.)"] },
  { "word": "uueu-", "defs": ["to do (v.)"] }
]
```
