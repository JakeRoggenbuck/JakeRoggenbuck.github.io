
---
title: more-than-half
type: page
date: 2023-07-10T00:00:00
tags: ["Rust"]
description: "Given an array of slightly less than half random numbers and slightly more than half of one specific number, find the the number that makes up slightly more than half."
---


<br>

# more-than-half
Given an array of slightly less than half random numbers and slightly more than half of one specific number, find the the number that makes up slightly more than half. Below are the speeds of multiple different algorithms to do this.

## Results
````
find_more_than_half_naive_hashmap_approach:	μ: 367376311.2 nanos, σ: 68236547.97368439, n: 30, reps: 100
find_more_than_half_array_index_approach:	μ: 9152388.3 nanos, σ: 1705146.465021606, n: 30, reps: 100
find_more_than_half_array_index_approach_iter_max:	μ: 9270903.3 nanos, σ: 1726418.191527093, n: 30, reps: 100
find_more_than_half_probability_approach:	μ: 313865.73333333334 nanos, σ: 59295.28083972807, n: 30, reps: 100
