---
title: assembly-ml
type: page
date: 2024-09-12T00:00:00
tags: ["C"]
description: "The goal of this project is to create a machine learning library for Python written in x86-64 Assembly."
---

# assembly-ml

The goal of this project is to create a machine learning library for Python written in x86-64 Assembly.

## Roadmap

This project has been broken down into multiple parts.

#### 1. add_one - proof of concept

Part 1. is the folder called `add_one` which is a C extension for Python that adds a very simple function in C that is accessible in Python.

![image](https://github.com/user-attachments/assets/f127e9db-b0bb-40e9-acd7-a33207ff66d3)

#### 2. linear-regression

Part 2. is the `linear-regression` folder which is linear regression written in C.

![image](https://github.com/user-attachments/assets/e8701192-3ebd-49e8-9c9c-498871daf50b)

You can use `regression.c` and `regression.h` as a simple regression library.

#### 3. regression_lib

Part 3. A regression library written in C and accessible in Python through the C extension

![image](https://github.com/user-attachments/assets/85b1c1c4-79d0-4872-b2b8-45d4914f8a2b)

#### 4. TODO

Part 4. will be to convert the linear regression code into x86-64 assembly

#### 5. TODO

Part 5. will be to write the C extension code in x86-64 assembly and add the linear regression assembly
