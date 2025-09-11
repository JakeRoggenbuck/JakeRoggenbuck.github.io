---
title: JEC-rs
type: page
date: 2022-08-03T00:00:00
tags: ["Rust"]
description: "  Jabacat's Easy Config "
---

# JEC-rs ![Rust](https://img.shields.io/github/workflow/status/jakeroggenbuck/JEC-rs/Rust?style=for-the-badge)

Jabacat's Easy Config

[JEC-py](https://github.com/JakeRoggenbuck/JEC-py) | [JEC-rs](https://github.com/JakeRoggenbuck/JEC-rs) | [JEC-go](https://github.com/JakeRoggenbuck/JEC-go) | JEC-c | [JEC-c++](https://github.com/Shuzhengz/JEC-cpp) | JEC-zig | JEC-ts

## API

```rs
ConfigFile
  - exists
  - remove
  - create
  - from_home

ConfigDir
  - exists
  - remove
  - create
  - from_home
```

## Usage

```rs
let conf = ConfigFile {
    path: "./test.yml".to_string(),
};

if !conf.exists() {
  conf.create();
}

conf.remove();

let conf = ConfigDir {
    path: "./config/".to_string(),
};

if !conf.exists() {
  conf.create();
}

conf.remove();

let conf = ConfigFile::from_home("./test.yml".to_string());
let conf = ConfigDir::from_home("./config/".to_string());
```
