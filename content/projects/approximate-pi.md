
---
title: approximate-pi
type: page
---

[See on Github](https://github.com/jakeroggenbuck/approximate-pi/)

# approximate-pi
This program creates a bunch of points in a square, then draws a circle with the same radius. Then it checks which points are inside the circle. The ratio of inside to out should be around pi/4, therefor multiplying that by 4 should result in an approximation of pi.

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
