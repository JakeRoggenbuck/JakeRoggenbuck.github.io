
---
title: cproc
type: page
---

[See on Github](https://github.com/jakeroggenbuck/cproc/)

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
