---
title: Helpful Git Commands
date: 2023-04-27T00:00:00
tags: ["git", "commands"]
type: post
showTableOfContents: true
---

## What your setup should look like (git remote -v)
```
origin	git@github.com:JakeRoggenbuck/ClubApp.git (fetch)
origin	git@github.com:JakeRoggenbuck/ClubApp.git (push)
upstream	git@github.com:aggieworks/ClubApp.git (fetch)
upstream	git@github.com:aggieworks/ClubApp.git (push)
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

