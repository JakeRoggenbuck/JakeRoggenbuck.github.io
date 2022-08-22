
---
title: break
type: page
---

[See on Github](https://github.com/jakeroggenbuck/break/)

# break
When automating your workflow, build systems and ci are some of the most important parts. Break is analogous to a build system, and test suite. Break, will insure your tests fail by irreversibly destroying your executables and source code according to your breakfile. It will also prepare the source code by breaking the files before tests. Break is blazing fast, and it's unique functionality allows for a streamlined workflow.

## About
`break` is a Unix command-line utility for destruction of programs.<br>
The `break` utility requires a file in the current directory called `GNObreakfile`, `breakfile`, or `Breakfile`.

## Use
If you have a breakfile, simply type `./break` or `python3 break` into command-line to start the irreversible, randomized destruction of your hard-written programs.

## Breakfile
Breakfiles have the keyword `break` and a name of a file
```python
break filename.c
```
There is another example at `./example/Breakfile`
