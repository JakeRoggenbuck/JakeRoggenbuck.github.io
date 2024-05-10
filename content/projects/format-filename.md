
---
title: format-filename
type: page
date: 2024-01-17T00:00:00
tags: ["Rust"]
description: "Format filenames to a command-line friendly format"
---


<br>

# Format filename
Format filenames to a command-line friendly format

![image](https://github.com/JakeRoggenbuck/format-filename/assets/35516367/02a60dc3-a694-4dd4-8976-d269940727c9)

## Why?
I often find myself in the command-line running programs like [Neovim](https://neovim.io/) (aliased to `v`) on text files or [Zathura](https://github.com/pwmt/zathura) on PDF files.
I usually name files with underscores, as it's easier to type out than a space when using the command-line. Similarly, I often don't use slashes, parentheses, or any other character that needs to be [excaped](https://en.wikipedia.org/wiki/Escape_character) for the reason of not having to type out more than needed. However, not all files are named this way by default, so this program makes it easier to change it quickly. It's also a good excuse to write something in [Rust](https://www.rust-lang.org/) ( :crab: ).

## Usage

```
formatfilename 0.1.0
Format filenames to a command-line friendly format

USAGE:
    formatfilename <filename>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

ARGS:
    <filename>    Input file
```
