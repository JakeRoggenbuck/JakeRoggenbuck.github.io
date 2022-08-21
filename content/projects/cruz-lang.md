
---
title: cruz-lang
type: page
---
# Cruzlang

Cruz Lang is a simple explicit static typed language. <br>
The compiler written in python is called shark and uses ply.lex for lexical analysis. <br>
It has 5 primitive data types:

### Data types
- `byte` one byte of data
- `char` one ASCII character
- `int` a 32 bit integer
- `prec` a number with a decimal point of 4 bytes
- `ptr` a 4 byte pointer address

### Other key words
- `fun` the function key word
- `while` a while loop
- `write` output as stdout
- `read` input as stdin
- `with` uses external files
- `if` do something if condition true
- `elif` else do something if condition true
- `else` else do something
- `takes` place for parameters and types
- `return` a return
- `returns` tells function what type to return

Here is the syntax:<br>
[Syntax](https://github.com/JakeRoggenbuck/cruz-lang/blob/master/cruz_syntax.txt)
