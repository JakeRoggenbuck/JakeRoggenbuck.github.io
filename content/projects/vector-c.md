---
title: vector-c
type: page
date: 2024-02-11T00:00:00
tags: ["C"]
description: "Vector math in C"
---

# Vectors-c

![image](https://github.com/user-attachments/assets/d939bbc5-f267-4960-80f5-c0609c456d12)

![Build](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/all-the-NaN-floats/c-cpp.yml?branch=main&style=for-the-badge)
[![C](https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white)](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=c&sort=stargazers)

Vector math in C

```c
int main() {
    struct Vec3 *v = build_vec3(1, 2, 3);
    struct Vec3 *u = build_vec3(4, 5, 6);

    double res = dot_vec3(v, u);

    // (1*4) + (2*5) + (3*6)
    assert(res == 4 + 10 + 18);

    struct Vec2 *a = build_vec2(1, 2);
    struct Vec2 *b = build_vec2(3, 4);

    double res2 = dot_vec2(a, b);

    // (1*3) + (2*4)
    assert(res2 == 3 + 8);

    interactive();

    return 0;
}
```
