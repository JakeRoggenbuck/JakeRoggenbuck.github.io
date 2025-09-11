---
title: pogscript
type: page
date: 2019-12-31T00:00:00
tags: ["Python"]
description: "A simple macro language"
---

# Pogscript

### Pogscript, Overtly, Great, Script

For syntax add `@@PogScript` to the top of the file

For each command use `>` in front

## Commands

- `v` for value
  `>v(2` This sets the value to 2 and writes it in memory to the first open location i.e. 0

- `o` for output
  `>o(0` This outputs memory location 0

- `i` for input
  `>i(Prompt: ` This outputs memory location 0

## Operators

- `a` for add;
- `s` for subtract
- `m` for multiply
- `d` for divide
- `p` for push

For each operator the formate is consistent
`>a{0{1`
<br>

This adds memory location 0 and 1
`>m{0{1`
This multiplies memory locations 0 and 1
