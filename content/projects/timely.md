---
title: timely
type: page
date: 2022-07-31T00:00:00
tags: ["Go"]
description: "Keep track of work hour in the command line"
---

# Timely ![Go](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/timely/go.yml?style=for-the-badge&branch=main)

Keep track of work hour in the command line

![image](https://user-images.githubusercontent.com/35516367/182043013-b1b2bf2d-9870-4a46-92d1-ae6e0eef6105.png)

## Why

If you work remotely and need to log a certain amount of hours a week and may have a hard time keeping track, timely can help you track your start and end time of work sessions in the terminal.

## Usage

```
Usage of timely:
  -check
    	Set to check
  -inline
    	No newline after print
  -no-color
    	No color output
  -no-word
    	No word in output
  -off
    	Set to off
  -toggle
    	Set to toggle
  -work
    	Set to work
```

## Add to prompt

In your bashrc or similar

```sh
PS1="$(timely -check -inline) "
```

## Setup

Create `~/.local/share/timely/` and `~/.local/share/timely/state`

```sh
mkdir -p ~/.local/share/timely/
printf off ~/.local/share/timely/state
printf off ~/.local/share/timely/times
```

## Outputs

![image](https://user-images.githubusercontent.com/35516367/182044781-2f413181-f2de-466a-808e-53067b93a48b.png)
