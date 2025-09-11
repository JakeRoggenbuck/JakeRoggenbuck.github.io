---
title: 5 BEST Git Commands
date: 2024-05-05T00:00:00
tags: ["git", "commands"]
type: post
showTableOfContents: true
---

These are the top 5 most useful git commands that I use almost every day. Out of the 30+ git command aliases I have, these are the for sure the best 5! Please let me know in the comments which ones you like the best!

Here is the post on [my dev.to page](https://dev.to/jakeroggenbuck/5-best-git-commands-45kg).

If you have a favorite command of your own, please share in the comments! I'll highlight my favorite ones!

## 1. Git List (GLS)

![Git List Command](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0m8txlhrhixr21lecwrr.png)

View a super short summary of the most recent commits. Instead of filling the page with just a few commits, view each commit in a single line.

```sh
git log --pretty=oneline --abbrev-commit
```

I have this aliased to `gls` with

```sh
alias gls='git log --pretty=oneline --abbrev-commit'
```

## 2. Push Origin (PUSHO)

Push to the current default branch. This one is simple, but I use this one the most.

```sh
git push origin $(git symbolic-ref --short HEAD)
```

I have this aliases to `pusho` in my .bashrc with

```sh
alias pusho='git push origin $(git symbolic-ref --short HEAD)'
```

## 3. Git logg (LOGG)

![Git Logg Command](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q5irsvs9rg0umnsf53kq.png)

View an ascii art history of all of the branches.

```sh
git log --graph --decorate --all
```

I have this aliased to `logg` with

```sh
alias logg='git log --graph --decorate --all'
```

## 4. Git Diff Precise (GDP)

Have you ever been looking at a git diff and it just tells you the whole line is different? Well, this command tells you exactly what characters have changed. Extremely helpful for catching issues in review or remembering exactly what you changed in a large line.

### Before

![Git diff before](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x4tjb10fja5u0lyulmnz.png)

### After

![Git diff after](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/axns1o114ho5d73ahhhf.png)

This is a simple example and it's easy to see what has changed, but if you had a really complicated line with a few different changes in different places, it can be hard to catch. Say an SQL command or similar.

Here is how to do it!

```sh
git diff --word-diff=color --word-diff-regex=.
```

I have this aliased to `gdp` with

```sh
alias gdp='git diff --word-diff=color --word-diff-regex=.'
```

## 5. The MOST useful of all (lookz)

Have you ever tried looking through a whole git history to try to find where you added or removed something? Has a line gone missing or a type changed that has caused an issue in production that you need to fix ASAP! Looking through each commit for a single line may take hours with a big repository. This allows you to search through every commit and use FZF to do it.

This does require you to have fzf installed, but I recommend having that anyway. It's super useful for this type of thing.

```sh
git remote && git log --pretty=oneline --abbrev-commit \
| awk '{print $1}' \
| xargs -I {} git show {} | fzf
```

I have this aliased to `lookz` with

```sh
alias lookz='git remote && git log --pretty=oneline --abbrev-commit | awk '"'"'{print $1}'"'"' | xargs -I {} git show {} | fzf'
```

Note the single quotes having to be escaped with `'"'"'` in the bash alias version but not the one directly for the shell.

I need help making this command more useful. It lets you find a specific name of something that can then be used to search, but once it's selected, you can't find the commit. If anyone knows how to do this, please leave a comment!
