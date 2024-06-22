---
title: Git for Technical Leadership
date: 2024-06-21T00:00:00
tags: ["git", "commands"]
type: post
showTableOfContents: true
---

Here are git commands I used very frequently when I was TPM for [Clubly](https://clubly.org). I still use these commands very frequently for other collaborative git projects and I provide these commands to TPMs that I train at AggieWorks. This was originally written January 10th of 2024.

Editors Note: This guide uses HTTP git remotes but SSH remotes are what I use and are what I prefer.

## Testing someone else's PR locally

```
# Fetch the PR where <NUMBER> can be changed to the number that the PR is
git fetch upstream pull/<NUMBER>/head

git checkout FETCH_HEAD

# Test locally
```

## Pushing to someone's PR - Here Be Dragons

```
# <DEV's Branch Name> can be changed to their branch name (ex. fix-bugs)
git switch -c <DEV's Branch Name>

# <DEV's Name> can be changed to the name of the developer (ex. jake)
# This name is set when you add the remote of the developer.
# See the next section for how to add a name (remote).
git pull <DEV's Name> <DEV's Branch Name>

# Make changes - Be careful here
git push <DEV's Name> <DEV's Branch Name>
```

## Adding a remote for a dev

```
# Add the URL - <NAME> is their name (ex. jake), <USERNAME> is their github username (ex. jakeroggenbuck)
git remote add <NAME> https://github.com/<USERNAME>/Clubly.git
```

## Pushing to preview - Here Be Dragons

```
# Update your local main
git swicth origin main
git pull origin main

# Test locally

# Pushing to preview
git push origin preview

# Go to github and create a pull request
# Review the pull request and merge after checks pass

# Check clubly.dev to see changes worked
```

## Pushing to production - Here Be Dragons
```
# Update your local main
git swicth origin main
git pull origin main

# Test locally

# Pushing to production
git push origin production

# Go to github and create a pull request
# Review the pull request and merge after checks pass

# Check clubly.org to see changes worked
```
