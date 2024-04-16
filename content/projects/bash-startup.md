
---
title: bash-startup
type: page
date: 2021-01-29T00:00:00
tags: ["C++"]
description: "A program that runs every time I open a terminal"
---

{{< github repo="jakeroggenbuck/bash-startup" >}}

<br>

# bash_startup
A program that runs every time I open a terminal

More complex things I want to run when my bashrc runs (external scripts)

![Screenshot from 2021-04-16 21-05-46](https://user-images.githubusercontent.com/35516367/115101747-9644c000-9efb-11eb-92f2-c01e200249d2.png)


## bash_startup
### Description
There are two scripts, the first `bash_startup` are written in crystal and c++.
This script will search through my bashrc and find aliases

### Example
```sh
start_alias_show () {
    bash_startup_cpp
}

# Checks if bash_startup_cpp is installed, then run it
if [ 2>/dev/null 1>/dev/null $(which bash_startup_cpp) ]; then
    start_alias_show
else
    echo "Install bash_startup_cpp and add it to your PATH"
fi
```

## cheat_sheet_startup
### Description
The second script is `cheat_sheet_startup` and will pull cheat sheets from cht.sh.
This script is written in python.

### Example
```sh
# It will print the last cheat sheet located at `~/.cht_sheet_entry`
# then it will pull the next one in the background so the perceived time
# it takes to run is just the time it takes to read the cht_sheet_entry
start_cheat_sheet () {
	# Print the cheat sheet pulled last run
    cheat_sheet_startup print

	# Pulling the cheat sheet (takes a few seconds)
    (cheat_sheet_startup pull &)
}

# Checks if the script is installed, then runs it
if [ 2>/dev/null 1>/dev/null $(which cheat_sheet_startup) ]; then
    start_cheat_sheet
else
    echo "Install cheat_sheet_startup and add it to your PATH"
fi
```
