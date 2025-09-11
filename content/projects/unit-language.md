---
title: unit-language
type: page
date: 2024-10-12T00:00:00
tags: ["TypeScript"]
description: "A small programming language using postfix notation using TypeScript and Deno."
---

![unit lang dark mode](https://github.com/user-attachments/assets/2feae9fc-35cc-4fc1-9e34-1f4cc85f5d61#gh-dark-mode-only)
![unit lang light mode](https://github.com/user-attachments/assets/2200f691-db60-4e06-832a-160bf62bde62#gh-light-mode-only)

[![TypeScript](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/unit-language/deno.yml?branch=main&style=for-the-badge)](https://github.com/JakeRoggenbuck/unit-language/actions)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=typescript)
![Deno JS](https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white)

A small programming language with postfix notation using [TypeScript](https://www.typescriptlang.org/) and [Deno](https://deno.com/).

## Syntax

### Postfix

In postfix for an operation of two arguments, you add two numbers to the stack, then the operator will pop the arguments off the stack. So adding `1` to `2` is the following.

```
1 2 +
```

### Operators

- `+` addition
- `-` subtraction
- `*` multiply
- `/` divide

### Built-in Functions

- `sin` sine function
- `cos` cosine function
- `tan` tangent function

### Built-in Constants

- `e` Euler's number
- `pi` Pi

### Equations

Unit-language can evaluate more complicated expressions too.

```
2 3 + 9 - 8 * sin 5 -
```

## Running

```sh
deno run dev
```

![image](https://github.com/user-attachments/assets/dfc55adc-6edc-4fb6-b061-7bf36597abaa)

## Running Tests

```sh
deno test
```

## Running list

```sh
deno lint
```

#### Testings Running

![image](https://github.com/user-attachments/assets/9370b25e-6895-473b-8409-0900d81caab5)
