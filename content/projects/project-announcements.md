
---
title: project-announcements
type: page
---
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
