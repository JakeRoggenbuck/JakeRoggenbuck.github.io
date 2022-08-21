
---
title: CError
type: page
---
# CError
Run cerror on a source code file of a compiled language to get the length of the outputted error compared to the filesize.
Some people try to get the largest error with the smallest file, this script gives you a score for this.

## Use (in general)
```c
#include __FILE__
```
The sample file is above, this is a small amount of source but produces a large error.
This would get a really good score because of that ratio of code to error.

## Use (the script)
`./cerror -f main.c -c g++`

./cerror -f `filename` -c `compiler name`
