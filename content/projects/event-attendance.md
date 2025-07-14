
---
title: event-attendance
type: page
date: 2024-10-15T00:00:00
tags: ["TypeScript"]
description: "Match provided email on an application with ones who filled out an event attendance form"
---


# event-attendance

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=typescript)
![Deno JS](https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white)

Match provided email on an application with ones who filled out an event attendance form

### Install Deno

https://docs.deno.com/runtime/getting_started/installation/

### Usage
```
deno run -A main.ts --event_path=<event.csv> --applications_path=<app.csv>
```

![image](https://github.com/user-attachments/assets/a2774bd4-e8e6-4bdd-a5cf-8e82821a3111)

### About
For this project, I used [TypeScript](https://www.typescriptlang.org/) and the [Deno](https://deno.com/) runtime

### Testing
```
deno test
```

### What did I learn from this project?
- "top-level async" is when you have an async in main
- Using the `.split()` method is the same as Python
- You can `.pop()` an array, and it'll remove the last item like in Rust
- Using a `forEach` is useful
- All async functions return a `Promise<Type>`
- You need to `--allow-read={filename}` to allow reads to files
- You can use `assertThrows` to test if a function correctly throws and Error
- Use slice to get a piece of an array like you would with `[i:j]` in Python
- Sets can contain strings but you need to create them with new `Set<string>([]);`
- Sets with strings to not have the `.intersection` method unfortunately
