
---
title: markov-chain
type: page
date: 2021-04-12T00:00:00
tags: ["Python"]
description: "None"
---

{{< github repo="jakeroggenbuck/markov-chain" >}}

<br>

# Markov chain
this is a simple markov chain implementation inspired by a project @nathansolomon1678 made

## Generate chain
1. The text used to make the chain should be in `./all_stuff.txt`, or change the string in markov.py

```py
from markov import MakeMarkov

mark = MakeMarkov()

# Only needed on first run
mark.setup_db()

# Pull all the words from the text file
mark.read_file()

# Make the sql database of unique words, only needed on first run
mark.find_unique()	# This will output to a database called `markov.db`

# Finally build the markov chain!
mark.train()	# This will output to a file called `markov.json`
```

## Generate text (in code)
```py
from markov import generate

# Some text will be generated with 100 words
text = generate()

# Some text will start with the word "The"
text = generate(start="The")

# Some text with the length of 1000 words
text = generate(length=1000)

# Some text with the length of 1000 words and starting with "The"
text = generate(length=1000, start="The")
```

## Generate text (with api)
```
uvicorn fast:app --reload
```

#### Some text will be generated with 100 words
```
http://127.0.0.1:8000
```

#### Some text will be generated with 1000 words
```
http://127.0.0.1:8000?length=1000
```

#### Some text will start with the word "The"
```
http://127.0.0.1:8000?start=The
```

#### Some text will start with the word "The" and with the length of 1000
```
http://127.0.0.1:8000?start=The&length=1000
```
