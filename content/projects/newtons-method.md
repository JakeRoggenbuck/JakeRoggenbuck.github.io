
---
title: newtons-method
type: page
date: 2022-11-30T00:00:00
tags: ["C"]
description: "Implementation of newtons method of zero approximation and more generally equation solution approximation."
---


# newtons-method
Implementation of newtons method of zero approximation and more generally equation solution approximation.

<img width="676" alt="newtons method" src="https://user-images.githubusercontent.com/35516367/210165782-5b459eb8-0933-4a78-8dd8-d5bb521e8997.png">

```c
double newtons_method(double (*func)(double), double n) {
    // Question... where does func(x) = n?
    // func(x) - n = 0
    double f(double x) { return func(x) - n; }

	// initial arbitrary guess
    double guess = 0.5;
    printf("Guess for func(x) - %.2lf = 0\n", n);
    printf("%lf\n", guess);

    for (int i = 0; i < 7; ++i) {
        // update guess for next iteration
        // x_1 = x_0 - f(x_0) / f'(x_0)
        // (x_n+1) = x_n - f(x_n) / f'(x_n)
        guess = guess - (f(guess) / derivative(f, guess));
        printf("%lf\n", guess);
    }
}
```

