
---
title: derive
type: page
date: 2022-04-17T00:00:00
tags: ["C"]
description: "Calculate the derivative"
---


# derive
Calculate the derivative of a function non-algebraically

[![Rust](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/derive/c-cpp.yml?branch=main&style=for-the-badge)](https://github.com/JakeRoggenbuck/derive/actions)
[![C](https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white)](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=c&sort=stargazers)


## Build
- Run `./scripts/build.sh`

## Config
You can replace this function with anything you would like to find the derivative of.
```c
double function(double x) {
  // f(x) = x^3 + 4x + 2
  return (pow(x, 3) + 4 * x) + 2;
}
```

## Run
- Run `./cmake/derive > data/out.csv`
- Run `python3 plotting/main.py`

![image](data/Figure_1.png)
