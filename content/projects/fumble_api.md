
---
title: fumble_api
type: page
date: 2020-09-26T00:00:00
tags: ["Python"]
description: "A simple web API to return critical charts for the game dnd 5e"
---


# fumble_api
A simple web API to return critical charts for the game dnd 5e

## Running
`python3 main.py`

## Data manipulation (setup)
```py
import data

# Clear all the data in the db
data.clear_data()

# Upload the new data in the list (fumble_data)
data.upload_data(data.fumble_data)
```

## Routes
Find table names at /<br>
`/` -> shooting, melee<br>
`/shooting/12` -> "Ooops!" + "You hit an unintended random target."<br>
`<table name>/<number 1-20>`
