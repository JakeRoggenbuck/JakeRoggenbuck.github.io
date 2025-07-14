
---
title: linear-regression-rs
type: page
date: 2024-03-09T00:00:00
tags: ["Rust"]
description: "Super simple linear regression library in Rust"
---


# linear-regression-rs
Super simple linear regression library in Rust ( :crab: ).

## Installation

Add this to your Cargo.toml:

```toml
[dependencies]
linear_regression_rs = { path = "../linear-regression-rs" }
```

## Usage

Here's a quick example to get you started:

```rust

use linear_regression_rs::{LinearFrame, Regression};

fn main() {
    let mut frame = LinearFrame {
        x: vec![1.0, 2.0, 3.0, 4.0, 5.0],
        y: vec![1.0, 2.0, 4.0, 4.0, 5.0],
        verbose: true,
    };

    let (slope, b) = frame.regression(1000, 0.01);
    println!("Model: y = {}x + {}", slope, b);
}
```

## API
```rust
fn squared_error(&mut self, f: &dyn Fn(f64) -> f64) -> f64;
fn mean_squared_error(&mut self, f: &dyn Fn(f64) -> f64) -> f64;
fn gradient_descent(&mut self, slope: f64, b: f64, learning_rate: f64) -> (f64, f64);
fn regression(&mut self, epoch: i32, learning_rate: f64) -> (f64, f64);
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or find a bug.

## License

This library is released under the MIT License. See the LICENSE file for more details.
