
---
title: component
type: page
date: 2024-09-04T00:00:00
tags: ["Rust"]
description: "A programming language that compiles to x86-64 assembly for math using postfix notation"
---


![Component Logo](./images/Component_dark_mode.png#gh-dark-mode-only)
![Component Logo](./images/Component_light_mode.png#gh-light-mode-only)
<br>
A programming language that compiles to x86-64 assembly for math using postfix notation
<br>
<br>
[![Rust](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/component/rust.yml?branch=main&style=for-the-badge)](https://github.com/JakeRoggenbuck/component/actions)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jakeroggenbuck/component?style=for-the-badge)
[![Rust](https://img.shields.io/badge/Rust-1A5D8A?style=for-the-badge&logo=rust&logoColor=white)](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=rust&sort=stargazers)

## About

Create a program in the interpreter or run a code file.

![image](https://github.com/user-attachments/assets/ea784519-74b4-4f44-9a7d-e15a2e91b44a)

Component converts your code to **RISC-V** or **x86-64** assembly to be run.

![image](https://github.com/user-attachments/assets/4bd224e4-45bf-48f4-8a83-fe0db297ceeb)

See [convert-to-assembly](https://github.com/JakeRoggenbuck/component?tab=readme-ov-file#convert-to-assembly) for more info.

Component is the follow-up language to [Basis](https://github.com/JakeRoggenbuck/basis) which is also a math language. Component was built with insights learned from writing Basis. The main difference between the two is that Basis has a more complicated syntax which included types and data structures whereas Component uses postfix notation with the addition of functions as operations.

The code for Component and Basis use the same lexer. Component is mainly different because it has a different syntax. The lexer for basis was written generally enough that this code can be shared. It also helps that Basis is a math language inspired by postfix notation but not exclusively postfix notation.

## Interactive interpreter
![image](https://github.com/user-attachments/assets/3d1978d6-c3b7-4954-9ba5-6b8958e396b1)

Note that the symbol `>` is used in code example to show that these expressions are being put into a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) and evaluated. These symbols at the start of the expression are not a part of the syntax.

```
Component 0.1.0
A programming language for math using postfix notation

USAGE:
    component [FLAGS] [OPTIONS]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information
    -v, --verbose    Print the stack and lexer information on each command

OPTIONS:
    -a, --asm <asm>              Use `x86` or `x86-64` to get x86-64 assembly and use `RISCV` or `RISC-V` for RISC-V
                                 assembly
    -f, --filename <filename>    Specify an input Component file to be run
```

## Guide

Component uses Postfix Notation.
Postfix Notation has the arguments first, and then the function or operation.
In the below example, we are adding 1 and 2 with the + operator to get 3.
Try typing the following into the interactive prompt:
```
1 2 +
```
It should look like this once it's been typed in and you press enter:
```
> 1 2 +
-> 3
```

Component has a lot of the operators you would expect from math and other languages:
```
+ addition
- subtraction
* multiplication
/ division
^ exponentiation
```

Some that may be familiar from other languages:
```
! logical not
```

And some that may not be as familiar:
```
? conditional assignment
```

Component also has functions that can be called in the same way as operators:
```
sqrt square root
```

And built-in constants:
```
e Euler's number
C Speed of light (in m/s)
pi Pi
true and false
```

## Full List of Keywords

- `int` converts types into NumericIntLiteral if possible
- `dec` converts types into NumericDecLiteral if possible
- `bool` converts types into BoolLiteral if possible
- `vars` prints all variables
- `stack` prints the current stack

## Constants
- `e` Euler's number
- `pi` Pi
- `C` Speed of light (in m/s)
- `true` Boolean true
- `false` Boolean false

## Built-in Functions
- `sqrt` Square root

## Operations
- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `^` exponentiation
- `!` logical not
- `?` conditional assignment

## Basic Math Operations
Add two numbers together.

```
> 1 1 +
-> 2
```

This also works with `-` for subtraction, `*` for multiplication, and `/` for division.

## Vector Operations (Coming Soon)

```
> 1 2 3 > 5 6 7 > x
-> 4 -8 4
```

## Variables

Assign the value 2 to variable `a`.

```
> 2 a =
-> 2
```

Use the variable `a`.
```
a 4 *
-> 8
```

## Conditional Assignment

This will conditionally assign `5` to `b` if `a` is true.

```
> true a =

> 5 b a ?
```

Variables are statically typed in Component. Here is an example usage of a variable.

![image](https://github.com/user-attachments/assets/f20443c1-3a83-4336-9b01-2309e2bc0af9)

## Function
Create an addition function called `foo`. Note that to start a function you do in fact need to use the `>` again to tell the interpreter that the following is a function and should not be evaluated.

```
> > + foo func

> 1 2 foo
-> 3
```

Here is the example of calculating the speed dilation of an object at velocity `v` (in m/s) for time `t` (in seconds). More info about this in the section [#Component-in-action](#component-in-action)

```
> > t 1 v 2 ^ C 2 ^ / - sqrt / s fn

```

## Type Conversion

```
> 4 5 /
-> 0.8

> 4 5 / int
-> 0
```

```
> 2 dec
-> 1
```

## Component in action

The following is a Component program to calculate the time dilation observed by an object moving at 300 m/s for 25 seconds.

![image](https://github.com/user-attachments/assets/47a51682-a1ce-4cb5-90f3-ab88e58dca9f)

After adding C as a constant and compressing this whole program into a single expression, here is the same code minus the variable assignment.

![image](https://github.com/user-attachments/assets/9b706345-9ae5-43a5-b9cc-ed7eb083c153)

Here I created a function called `s` that computes the same equation.

![image](https://github.com/user-attachments/assets/a89c1203-773f-461d-b169-ac1d65882617)

A test file with the same functionality can be found here: [space](https://github.com/JakeRoggenbuck/component/blob/main/testfiles/space).

## Convert to Assembly

Currently the interpreter creates x86-64 or RISC-V assembly as the code is being evaluated. In the future, an output file can be specified and the assembly will be put into that file and assembled.

![image](https://github.com/user-attachments/assets/4bd224e4-45bf-48f4-8a83-fe0db297ceeb)

## Error Handling

Errors that occur in the interactive interpreter cause the line being interpreted to crash. When this happens, one of the following error messages will be displayed.

#### Assignment Type Mismatch [E1]

An Assignment Type Mismatch happens when you try to assign a value to an existing variable of a different type. In the following example, the variable `a` is created as a NumericIntLiteral type. Then the value `0.8` is attempted to be assigned the variable `a` but because `0.8` is of the type NumericDecLiteral, it fails with an Assignment Type Mismatch error. This means that variables are statically typed and cannot be changed during runtime.

```
> 1 a =
-> 1

> 4 5 / a =
Error: Assignment Type Mismatch [E1]
0.8 a =
    ^^^ cannot assign value 0.8 of type <NumericDecLiteral> to a variable of type <NumericIntLiteral>
```

#### Wrong Type [E2]

A Wrong Type error happens when you try to call an operation or a function on one or more variables of the wrong type. Here is an example of an identifier being used before it has been assigned. Since it does not get swapped out for a value, since it hasn't been assigned, it has the type Identifier and therefore is the wrong type. In the future, this will also happen for math operations on the type String.

```
> a 1 +
Error: Wrong Type [E2]
a 1 +
^ value is not a <NumericIntLiteral> or <NumericDecLiteral>
```

#### Invalid Type Cast [E3]

An Invalid Type Cast happens when you try to cast from type to type but there is not an operation where this is possible. Similar to the Wrong Type error, the example below shows how an Identifier that has not been assigned a value, is being attempted to cast to both a NumericDecLiteral with the keyword `dec` and a NumericIntLiteral with the keyword `int`. Since there has been no assignment to the variable `a`, it will not get swapped out for a value, and the type cannot be cast to either.

```
> a dec
Error: Invalid Type Cast [E3]
a dec
  ^^^ Cannot convert <Identifier> to <NumericDecLiteral>

> a int
Error: Invalid Type Cast [E3]
a int
  ^^^ Cannot convert <Identifier> to <NumericIntLiteral>
```

#### Stack Empty [E4]
The Stack Empty error happens when the function or operation that has been called requires more arguments than are currently on the stack. This is an indication that not enough variables where provided. In the example below, a single NumericIntLiteral has been added to the stack and then the Addition operation has been called. This gives an error because the Addition operation requires two arguments.

```
> 1 +
Error: Stack Empty [E4]
```

#### Operation Not Implemented [E5]

The Operation Not Implemented error occurs when a non-identifier symbol has been parsed that has not gotten functionality yet. Symbol here meaning one or many characters (e.g. `foo` or `123`). Since symbols that are not keywords or existing identifiers get read as identifiers (so long they follow the identifier rules), there are few cases that trigger the Operation Not Implemented error. The one class of symbols that do cause this error are characters like `#` and `$` which have not been assigned any operation.

```
> #
Error: Operation Not Implemented [E5]

> $
Error: Operation Not Implemented [E5]
```

#### Example of errors

Here is an example of what this might look like in the interactive interpreter.

![image](https://github.com/user-attachments/assets/993e8eb3-0ca2-4a20-8b30-37dd405992bd)


## More About Component

#### Why is it called Component
Component is named after vectors, where a single scalar in a vector is called a "component" of that vector (e.g. < 1 2 3 > where 1, 2, and 3 are all components. This is also in reference to the name [Basis](https://github.com/JakeRoggenbuck/basis), where a basis vector is a subset of a vector space where the vectors are linearly independent.
