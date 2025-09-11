---
title: Type safety in Rust
date: 2022-11-05T00:00:00
tags: ["rust", "language", "concept"]
type: post
showTableOfContents: true
---

Here is an interesting thing that shows why compiled languages are good, specifically why Rust is great.

Take this code example that checks an enum.

```py
from enum import Enum

class Mode(Enum):
    Easy = 0
    Hard = 1

if mode == Mode.Easy:
    print("It's easy.")
elif mode == Mode.Hard:
    print("Hard mode.")
```

What happens if `mode` is set to `None`, or `2` or `"Anything"`.
If that's the case, neither method will be executed.

```py
if mode == Mode.Easy:
    print("It's easy.")
elif mode == Mode.Hard:
    print("Hard mode.")
else:
    print("Error?")
```

In languages like this, you will usually find a comment like this `# This should never happen`
and like this `Why? What went wrong? Time to debug to find the line that broke this.`

In compiled languages, specifically a feature of statically typed language evaluated at compile time, `mode` would have a type, most likely int.
This means that the options of a `None` type or a `string` cannot be represented in a variable of that type.
This is cool and this happens in languages like C/C++, Java, etc. but this isn't as good as it can get.

In Rust,
We make invalid types unrepresentable.
Here is a Rust example no more complex than the Python example, yet it insures safety that Python does not.

This code compiles because mode can only be Easy or Hard. The evaluation is between the same types.
`mode == Mode::EASY` => `<Mode> == <Mode>` => type valid.

```rs
#[derive(PartialEq)]
enum Mode {
    EASY = 0,
    HARD = 1,
}

fn main() {
    let mode = Mode::EASY;

    if mode == Mode::EASY {
        println!("It's easy.");
    } else if mode == Mode::HARD {
        println!("Hard mode.")
    }
}
```

However, if you accidentally what mode out for a string...

```rs
let mode = "This is a string";

if mode == Mode::EASY {
    println!("It's easy.");
} else if mode == Mode::HARD {
    println!("Hard mode.")
}
```

You get many helpful compiler errors, like `can't compare '&str' with 'Mode'` so you know exactly what is wrong.

Any even when C/C++ would fail, Rust gives an error letting you know what is wrong early.

```rs
let mode = 3;

if mode == Mode::EASY {
    println!("It's easy.");
} else if mode == Mode::HARD {
    println!("Hard mode.")
}
```

=> `can't compare '{integer}' with 'Mode'`
