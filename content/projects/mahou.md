
---
title: mahou
type: page
---

[See on GitHub](https://github.com/jakeroggenbuck/mahou/)

# mahou

Mahou is my AP Computer Science create task for the 2020-21 year. Mahou is a source-to-source compiler, from a custom language to python.

Mahou uses a lexer to find all of the tokens in the original source, then uses a parser to convert the source code into python.

# First language
```
set a = 0;
a += 1;
print a;
```

# Tokens parsed
```
Type          Part      Line
----------------------------
Set           set       1:1
Identifier    a         1:5
Assign        =         1:7
Numeric       0         1:9
Semi          ;         1:10
Identifier    a         2:12
Plus          +         2:14
Assign        =         2:15
Numeric       1         2:17
Semi          ;         2:18
Print         print     3:20
Identifier    a         3:26
Semi          ;         3:27
```

# Outputted python
```py
a = 0
a+=1
print(a)
```
