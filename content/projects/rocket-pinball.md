
---
title: rocket-pinball
type: page
date: 2021-04-27T00:00:00
tags: ["Python"]
description: "Space themed pinball rework, with new game elements"
---


<br>

# rocket-[not]-pinball
A game that started as pinball, but really isn't, more fun

<img src="https://user-images.githubusercontent.com/35516367/116340998-f6a5ee00-a794-11eb-9b2d-0ce395c5149a.png?raw=true"
     alt="Main Page" width="400" height="410" />


## Setup
```
pip3 install -r requirements.txt
```

## Running
```
# Start the HTTP server
python3 app.py

# Start the score REST API
uvicorn app:APP --reload --port 8081
```

### Current progress
Here are the decisions that have been made about the pinball game.
The game won't be the standard pinball game.
It will have the mechanic of hitting the ball, but the objective is to have it travel upwards without hitting obstacles.
It will be space themed, and the player is trying to send the ball to space, avoiding planets, meteors, and other space debris.
It will be made using p5.js and a nodejs backend to host it.
Basic game mechanics have been made, like ball and obstacle movement, along with obstacle creation and destruction.
