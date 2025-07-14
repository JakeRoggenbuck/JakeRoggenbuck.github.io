
---
title: special-relativity-time-dilation
type: page
date: 2024-08-27T00:00:00
tags: ["Rust"]
description: "Calculate the time dilation by velocity as described by special relativity using Rust! 🦀"
---


# special-relativity-time-dilation
[![Rust](https://img.shields.io/badge/Rust-1A5D8A?style=for-the-badge&logo=rust&logoColor=white)](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=rust&sort=stargazers)
[![Rust](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/special-relativity-time-dilation/rust.yml?branch=main&style=for-the-badge)](https://github.com/JakeRoggenbuck/special-relativity-time-dilation/actions)


Calculate the time dilation by velocity as described by special relativity using Rust! :crab:

## Code
```rs
fn time_dilation_by_velocity(t: f64, v: f64) -> f64 {
    t / (1.0 - ((v * v) / (C * C))).sqrt()
}
```

## Units Used
```
t: time in seconds
v: km/s
```

## Constants
```rs
const C: f64 = 299_792_458.0;
```

## Equation
Here is the equation for time dilation from velocity.

![image](https://github.com/user-attachments/assets/337346ae-f397-42f6-9155-cd2db4ffdc89)

## See Also
I also wrote this code in my language called [Component](https://github.com/JakeRoggenbuck/component) seen below:

![image](https://github.com/user-attachments/assets/2ce06d9c-aa72-4dd0-b108-765d340175fd)
