
---
title: cproc
type: page
date: 2021-07-04T00:00:00
tags: ["C"]
description: "A small C preprocessor, written in C."
---


# cproc ![cmake](https://img.shields.io/github/workflow/status/adamhutchings/cproc/cmake?style=for-the-badge)
A small C preprocessor, written in C.
```c

#define A 4                 // New code
int main() {                int main() {
    int x = A;      ->          int x = 4;
}                           }
```

## build
```
./scripts/build.sh
```

## run
```
./build/cproc
```
