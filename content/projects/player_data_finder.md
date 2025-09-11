---
title: player_data_finder
type: page
date: 2020-08-19T00:00:00
tags: ["Python"]
description: "None"
---

# player_data_finder

## Install

`pip3 install -r requirements.txt`

## Setup

Make a file called `config.py`
Add this class and your ftp credentials

```py
class Config:
	host = "ftp.example.com"
	username = "user"
	password = "password"
	port = 254
```

## Running

`python3 main.py`
