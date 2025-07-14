
---
title: colorgradient-julia
type: page
date: 2021-07-14T00:00:00
tags: ["Julia"]
description: "A tool in Julia to make color gradients"
---


# colorgradient-julia
- Python version [colorgradient](https://github.com/JakeRoggenbuck/colorgradient)
- Rust version [colorgradient-rs](https://github.com/JakeRoggenbuck/colorgradient-rs)
- Julia version [colorgradient-julia](https://github.com/JakeRoggenbuck/colorgradient-julia)
- C version [colorgradient-c](https://github.com/JakeRoggenbuck/colorgradient-c)
- Go version [colorgradient-go](https://github.com/JakeRoggenbuck/colorgradient-go)
- Clojure version [colorgradient-clj](https://github.com/JakeRoggenbuck/colorgradient-clj)

<img width="400" alt="color grad" src="https://user-images.githubusercontent.com/35516367/210163818-5f286e55-9b2a-431c-a397-c1a24a37dbb1.png">

```jl
# Find the slope of two point
find_slope(x1, y1, x2, y2) = (y2 - y1) / (x2 - x1)

# Find the closest whole numbers on both sides of a x
neighbors(x) = round(x), ceil(x)

# Find the predicted value of y given a value x
function find_y(x, known_x)
    # Check if the given value is exactly one in the known list
    if round(x) == x
        return known_x[x]
    end

    left_x, right_x = neighbors(x)

    left_y = known_x[left_x]
    right_y = known_x[right_x]

    slope = find_slope(left_x, left_y, right_x, right_y)

    return left_y + (slope * (x - left_x))
end
```
