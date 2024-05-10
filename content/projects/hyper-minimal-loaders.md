
---
title: hyper-minimal-loaders
type: page
date: 2022-08-06T00:00:00
tags: ["Rust"]
description: "A hyper minimal loader bar only 1.62 KB source."
---


<br>

# hyper-minimal-loaders

[![Rust](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/hyper-minimal-loaders/rust.yml?branch=main&style=for-the-badge)](https://github.com/JakeRoggenbuck/hyper-minimal-loaders/actions)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jakeroggenbuck/hyper-minimal-loaders?style=for-the-badge)

A hyper minimal loader bar only 1.9 KB source.

```rs
use hyper_minimal_loaders::{Count, Counter};
use std::{thread, time};

fn main() {
    let mut counter = Count::default();

    loop {
        counter.show();
        counter.tick();

        if counter.finished() {
            break;
        }

        thread::sleep(time::Duration::from_millis(100));
    }
}
```

## What is hyper-minimal-loaders?
It's just a simple percentage loader

![image](https://github.com/JakeRoggenbuck/loader-test/assets/35516367/b9fb9b1b-7948-416f-9aa9-6d0d58f1612a)

## Why?
Sometimes you are making a program that will take hours to run, say you are computing large values of PI or something similar, and you want to know how long a certain operation will take. You may not necessarily want to print a bunch of info about the progress, especially every operation, because that would slow down the computation. You simply want to know if it's going to take days, weeks, or months to complete. This was the type of thing that I needed when doing math research for [t3 paper](https://github.com/JakeRoggenbuck/T3-Paper-Code).

Here is an example of me implementing one of these super simple loaders written directly in the code to compute these large numbers.
I later decided to make this library so that I could abstract the logic outside of the math computation code, and instead use my own library.

```rs
    let one_percent = MAX / 100;
    let mut percents_done = 0;

    loop {
        if t_location > one_percent * percents_done {
            percents_done += 1;

            print!("\x1b[1A\x1b[2K");
            println!("{percents_done}%");
        }

        // -- snip -- source found at https://github.com/JakeRoggenbuck/T3-Paper-Code/blob/main/rl-3-ratio/src/main.rs

        if t_location > MAX {
            break;
        }

        last = x;
    }

    print!("\x1b[1A\x1b[2K");
    println!("{percents_done}%");
}
```
