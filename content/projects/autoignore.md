
---
title: autoignore
type: page
date: 2022-12-14T00:00:00
tags: ["None"]
description: "None"
---

{{< github repo="jakeroggenbuck/autoignore" >}}

<br>

# autoignore

## Overview

`autoignore` automatically adds all untracked files to your `.gitignore` file so
you won't ever have to worry about them again.

## Install

If `path/to/autoignore/` is the directory containing *this file*, add the
following line:
```
alias autoignore='python3 path/to/autoignore/src/main.py'
```
to your bash profile (which is located at `~/.bash_profiles` on macOS and at
`~/.bash_profile` on Linux), and then restart your terminal.

## Uninstall

Remove the line you added during the install step.

## Usage

Navigate to the directory with the git repository in question and run the
command `autoignore`.
