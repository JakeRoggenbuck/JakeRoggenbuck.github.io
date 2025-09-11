---
title: all-the-NaN-floats
type: page
date: 2024-04-30T00:00:00
tags: ["C"]
description: "Write all of the NaN floats from IEEE 754 32 bit floats to disk."
---

# all-the-NaN-floats

![Build](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/all-the-NaN-floats/c-cpp.yml?branch=main&style=for-the-badge)
[![C](https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white)](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=c&sort=stargazers)

Write all of the [NaN](https://en.wikipedia.org/wiki/NaN) floats from [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) 32 bit floats to disk.

In IEEE 754, if all 8 bits of the exponent in a 32 bit float are set to 1, and at least one of the bits in the mantissa is set to 1, then the float is NaN.

This means that there are (2 ^ (32 - 8)) - 2 or 16777214 possible values for NaN for the version of NaN where all exponent bits are set to 1. There are 23 bits in the mantissa and a bit for positive and negative that all can be set to either 1 or 0. You also have to remember to subtract 2 because when just the sign and exponent are set, then it can be infinity for when the sign bit is 0 and -infinity when it's 1. You can see this is done when I start at `(0b011111111 << 23) + 1`, where the `+ 1` makes sure that not only the sign and exponent are set by adding 1 to the mantissa.

These are all of the NaNs between the range of start and end as seen here:

```c
unsigned int start = (0b011111111 << 23) + 1;
unsigned int end = 1 << 31;
```

Helpful visualization: https://www.h-schmidt.net/FloatConverter/IEEE754.html

The resulting file size is ((2 ^ (32 - 8)) - 2) \* 4, where 4 is the amount of bytes a float 32 takes up. This results in ~67.11 Megabytes of disk space. If we compress this with something like xz with the highest level of compression, we get a file size of ~4.16 Megabytes.

That [file](https://github.com/JakeRoggenbuck/all-the-NaN-floats/blob/main/all-the-nan-floats.xz) was small enough to include in the git project.

This also means that a 64 bit IEEE float would have (2 ^ (64 - 11)) - 2 or 9007199254740990 different NaNs. This means a file with all of the NaNs would be ((2 ^ (64 - 11)) - 2) \* 4 bytes or about 36,028TB and that's not realistically feasible to create.

Also, a 128 bit float would have 36028797018963970 Exbibytes of NaN floats.
