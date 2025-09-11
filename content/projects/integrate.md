---
title: integrate
type: page
date: 2022-04-18T00:00:00
tags: ["C"]
description: "Calculate the integral"
---

# integrate

## Build

- Run `./scripts/build.sh`

## Config

You can replace this function with anything you would like to find the antiderivative of.

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
