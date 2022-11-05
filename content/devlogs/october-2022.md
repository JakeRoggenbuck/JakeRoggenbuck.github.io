---
title: October 2022
type: page
---

## Update
In October I did 146 commits and created 9 repositories. I have been using C a lot this months because my class I am currently taking is in C. This has inspired me to write a lot of my new side projects in C. At least the ones where C makes sense as a language.

This month, I made an October themed fetch program.
[JakeRoggenbuck/spookyfetch](https://github.com/JakeRoggenbuck/spookyfetch)

## Auto Clock Speed 0.1.10
In this release, we closed and complete 76 issues. This was a relatively large release with tons of new features and lots of bug fixes.

[Release can be found here](https://github.com/JakeRoggenbuck/auto-clock-speed/releases/tag/0.1.10)

![acs](https://user-images.githubusercontent.com/35516367/199084229-aee15ac5-bd86-41e9-b7fc-22517e21e6f0.png)

## Algorithms
A friend challenge me to make a program to find anagrams in a list of words that has a better time complexity than quadratic.

My project can be found [here](https://github.com/JakeRoggenbuck/anagram) in both python and rust.

The algorithm is most definitely better than quadratic O(n^2)
1. It loops over each word once. (Linear)
2. and sorts the characters in the word. (Does not effect complexity)
3. It then checks if this sorted string is a key in a dictionary. (get is O(1))
4. If it didn't exist, it creates a new key value, with the word as the value and the sorted string as the key. (insert is O(1))
5. If it did exist, it appends the new word that matches the sorted value. (insert is O(1))

Because the only thing in the program that effects complexity is the linear loop over the words. This code has linear time complexity.

```
Tested with wordlist of 172787 lines long from
       - https://github.com/dwyl/english-words
==============================================

Starting Rust

real	0m0.153s
user	0m0.133s
sys	0m0.020s


-----------------
Starting Python

real	0m0.197s
user	0m0.176s
sys	0m0.020s


-----------------
```
