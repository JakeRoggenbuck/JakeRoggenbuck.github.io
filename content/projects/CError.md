---
title: CError
type: page
date: 2020-08-10T00:00:00
tags: ["Python"]
description: "Run cerror on a source code file of a compiled language to get the length of the outputted error compared to the filesize."
---

# CError

Run cerror on a source code file of a compiled language to get the length of the outputted error compared to the filesize.
Some people try to get the largest error with the smallest file, this script gives you a score for this.

## Use (in general)

```c
#include __FILE__
```

credit: [@adamhutchings](https://github.com/adamhutchings) for finding this

The sample file is above, this is a small amount of source but produces a large error.
This would get a really good score because of that ratio of code to error.

## Use (the script)

```
./cerror -f main.c -c g++
```

```
./cerror -f <filename> -c <compiler name>
```
