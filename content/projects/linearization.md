---
title: linearization
type: page
date: 2022-12-08T00:00:00
tags: ["C"]
description: "None"
---

# linearization

```c
double lin(double (*func)(double), double a) {
    int x = round(a);
    return func(a) + derivative(func, a) * (x - a);
}
```

```
l(x) = f(a) + f'(a) * (x - a)
for a value of a near x
```

```
lin(16.10): 4.003599
f(16.10):   4.012481
|Δ|:        0.008882
```
