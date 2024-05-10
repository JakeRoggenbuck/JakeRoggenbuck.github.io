
---
title: rock
type: page
date: 2021-05-17T00:00:00
tags: ["Rust"]
description: "A simple command line utility for manipulating standard in and out, similar to awk"
---


<br>

# Rock ![Rust](https://img.shields.io/github/workflow/status/jakeroggenbuck/rock/Rust?style=for-the-badge)
A simple command line utility for manipulating standard in and out, similar to awk

-----

## Install
```
git clone https://github.com/JakeRoggenbuck/rock
cargo install --path rock
```

## Usage
| short | long        | description                                 | example                           |
|-------|-------------|---------------------------------------------|-----------------------------------|
| `-r`  | `--replace` | replace a certain string with another       | `rock --replace "~" "/home/jake"` |
| `-s`  | `--split`   | split into multiple lines after a character | `rock --split ,`                  |

## Examples

```
echo $PATH | rock -s : | rock -r "/home/jake" "~"

echo "~/Downloads,~/Documents,~/Repos/rock" | rock --replace "~" "/home/jake"

echo "~/Downloads,~/Documents,~/Repos/rock" | rock --split , | rock --replace "~" "/home/jake"
```

## TODO Feature
```
-f --filter will filter out something
-b --block will completely block out something
-o --only will only show something
-p --prepend something to the begining
-a --append something the end
```
