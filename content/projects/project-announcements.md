
---
title: project-announcements
type: page
date: 2021-09-11T00:00:00
tags: ["Python"]
description: "None"
---

{{< github repo="jakeroggenbuck/project-announcements" >}}

<br>

# project-announcements


## Usage
from [test.py](test.py)
```py
from main import Repo

if __name__ == "__main__":
    repo = Repo("jakeroggenbuck", "stow-squid")

    announcements = repo.get_announcements()
    for announcement in announcements:
        print(announcement)
```
