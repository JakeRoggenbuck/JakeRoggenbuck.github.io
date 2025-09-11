---
title: Helpful Git Commands (Updated)
date: 2024-06-20T00:00:00
tags: ["git", "commands"]
type: post
showTableOfContents: true
---

## About the article

This is an updated version of the original article from April of 2023 found [here](../helpful-git-commands/) originally made for the Clubly team. This resource may be helpful for other teams. This article is also shows the use of Circular Development.

![Circular Development](../../images/Circular%20Development%20-%20Git%20Flow.png "Circular Development")

## Setting up a project

1. Fork the project
2. Clone the fork
   - Use `git clone git@github.com:JakeRoggenbuck/clubly.git`
3. Add the upstream remote
   - Use `git remote add upstream git@github.com:aggieworks/clubly.git`

## What your setup should look like (git remote -v)

```
origin	git@github.com:JakeRoggenbuck/clubly.git (fetch)
origin	git@github.com:JakeRoggenbuck/clubly.git (push)
upstream	git@github.com:aggieworks/clubly.git (fetch)
upstream	git@github.com:aggieworks/clubly.git (push)
```

## Getting information

```sh
# list the remotes
git remote -v
```

```sh
# check your staging area
git status
```

```sh
# check commits
git log
```

## Update from latest

```sh
# make sure you are on your own main and don't have any current changes
git switch main

git pull upstream main
```

## Before a feature/assignment/change

This should be done before the start of any distinct feature or large change.

```sh
git switch main

git pull upstream main

git switch -c feature-name
```

## Submitting a feature/assignment/change

```sh
# add all changed but prevously staged files
git add -u

git commit

git push origin feature-name
```
