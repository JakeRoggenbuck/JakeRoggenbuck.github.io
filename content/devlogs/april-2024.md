---
title: April 2024
date: 2024-04-31T00:00:00
type: post
---

## HackDavis - Hackathon
[HackDavis](https://hackdavis.io/) is hosts a yearly hackathon at UC Davis.

### What my team built

Make three different OpenCV models for lane detection, human obstacle detection, and driver alertness detection.

[Github](https://github.com/JakeRoggenbuck/hackdavis-2024)

## all-the-NaN-floats

Write all of the NaN floats from IEEE 754 32 bit floats to disk.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    fp = fopen("all-the-nan-floats", "wb");

    // This is first number where all the exponent bits are set, but nothing
    // else is set except the first bit, otherwise it would be infinity or zero
    unsigned int start = (0b011111111 << 23) + 1;

    // This is number where all the bits have been set except the sign bit
    unsigned int end = (1 << 31) - 1u;

    int counter = 0;

    do {
        // Write the positive value
        fwrite(&start, sizeof(unsigned int), 1, fp);
        start = -start;

        // Write the negative value
        fwrite(&start, sizeof(unsigned int), 1, fp);
        start = -start;

        start++;

        // Count twice for the two writes
        counter++;
        counter++;
    } while (start < end);

    printf("Wrote %d NaN floats\n", counter);
}
```

## Vector C
Vector math in C

[Github](https://github.com/JakeRoggenbuck/vector-c)

## Lots of leetcode!

I got to 400 problems solved!

![Leetcode Stats](https://leetcard.jacoblin.cool/jakeroggenbuck?ext=heatmap)
