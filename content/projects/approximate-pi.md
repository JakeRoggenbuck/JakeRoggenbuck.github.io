---
title: approximate-pi
type: page
date: 2022-04-17T00:00:00
tags: ["C"]
description: "This program creates a bunch of points in a square, then draws a circle with the same radius. Then it checks which points are inside the circle. The ratio of inside to out should be around pi/4, therefor multiplying that by 4 should result in an approximation of pi."
---

# approximate-pi

This program creates a bunch of points in a square, then draws a circle with the same radius. Then it checks which points are inside the circle. The ratio of inside to out should be around pi/4, therefor multiplying that by 4 should result in an approximation of pi.

## Favorite bit of code

```c
int calculate_single() {
    int s;

    s = rand() % DIAMETER;
    return pow(s, 2) + RADIUS;
}

int calculate_point() {
    int x = calculate_single();
    int y = calculate_single();
    return x + y <= pow(DIAMETER, 2);
}
```

## Run

- Run `./cmake/approximate_pi`

## Build

- Run `./scripts/build.sh`

## Results

```
787961 inside the circle, 212039 outside.
3.151844

787271 inside the circle, 212729 outside.
3.149084
```
