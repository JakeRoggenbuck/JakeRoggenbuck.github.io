---
title: self-referential-hashes
type: page
date: 2024-12-06T00:00:00
tags: ["Rust"]
description: "#️⃣ This program finds strings that include parts of hashes H, that when hashed, the output hash starts with H."
---

# Self Referential Hashes

[![Rust](https://img.shields.io/badge/Rust-1A5D8A?style=for-the-badge&logo=rust&logoColor=white)](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=rust&sort=stargazers)

#️⃣ This program finds strings that include parts of hashes H, that when hashed, the output hash starts with H.

MD5(`Jake's MD5 hash = 109e5a72e`) = **109e5a72e**ea4eaa2c1bf94edcecb2fb0

## How

I am using a program in Rust that is multithreaded and tries all possibilities.

## Why

This is kinda interesting and it's a fun thing to have a hash like `Jake's MD5 hash = 109e5a72e` that makes people think. And the larger the hash, the less easily it can be found by others, so a hash with maybe 10+ hash characters might be almost impossible for most people to find, making it kinda like a trophy of multithreading and optimization.
