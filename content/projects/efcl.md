
---
title: efcl
type: page
date: 2022-11-11T00:00:00
tags: ["Rust"]
description: "The most simple, small, and fast terminal color text library."
---


# Efficiency First Color Library (EFCL)

[![Rust](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/efcl/rust.yml?branch=main&style=for-the-badge)](https://github.com/JakeRoggenbuck/efcl/actions)
[![Crates Version](https://img.shields.io/crates/v/efcl?style=for-the-badge)](https://crates.io/crates/efcl)
[![Downloads](https://img.shields.io/crates/d/efcl?style=for-the-badge)](https://crates.io/crates/efcl)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jakeroggenbuck/efcl?style=for-the-badge)

The most simple, small, and fast terminal color text library.

## Priorities
- Runtime speed
- Dependency size

## Quickstart

```toml
efcl = "0.1.3"
```

```rs
use efcl::{color, Color, bold};

fn main() {
    println!("Hello, {}!", color!(Color::BLUE, "world"));

    println!("{}!", bold!(&color!(Color::RED, "EFCL").to_string()));
}
```

![image](https://github.com/user-attachments/assets/01c3f978-cd49-42df-b06b-9abcd40be5c5)

## Why?

Here is a flamegraph of the [auto-clock-speed](https://github.com/JakeRoggenbuck/auto-clock-speed) project. In green is the time it takes for colored text to render. That is just over 9% of runtime cpu is taken by color formatting.

![image](https://user-images.githubusercontent.com/35516367/201438554-a3c7bd63-2810-4140-a457-da8eff267d21.png)

![EFCL](https://user-images.githubusercontent.com/35516367/223891514-462f831d-19d9-4289-89e5-14fe0ad2c940.png)

This is way too long for what we need it for. In auto-clock-speed, color is used sparingly and only a few default colors on top of that.

![image](https://user-images.githubusercontent.com/35516367/201438673-56254428-515b-4e18-a918-c557703e936e.png)

This library is for the most basic text coloring for the terminal and only includes the default terminal colors, no background color or text styles other than bold. This library is for speed.
