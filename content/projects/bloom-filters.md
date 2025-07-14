
---
title: bloom-filters
type: page
date: 2022-08-25T00:00:00
tags: ["C"]
description: "Bloom filter written in C"
---


# bloom-filters
Bloom filter written in C

View the blog post! https://jr0.org/posts/bloom-filters/


## Intro
A bloom filter is a data structure that allows you to quickly identify if some data has been previously added to the structure.
What makes a bloom filter unique is that is that it gives up full accuracy for huge speed boost.
A bloom filter has small false positive rate, and this rate can be decreased by using more memory and more hash algorithms, however you can find an optimal amount of memory and hash algorithm count to achieve great speed while still maintaining lower memory than a normal list.
This specific implementation uses three different hashing algorithms.

## Use cases
Bloom filters are very convenient for many different use cases.

My favorite application is for checking if a username or unique id exists somewhere. Bloom filters have very low memory usage as well as being fast, so for a solution that doesn't need 100% accuracy and can get away with something close to 99%, then a bloom filter might be the correct structure.

...

View the rest of the post at https://jr0.org/posts/bloom-filters/ 
