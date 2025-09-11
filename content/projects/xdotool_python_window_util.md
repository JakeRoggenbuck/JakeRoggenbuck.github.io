---
title: xdotool_python_window_util
type: page
date: 2020-07-29T00:00:00
tags: ["Python"]
description: "None"
---

# xdotool_python_window_util

## Use

### Size

```py
from main import Size

a = Size(40, 60)
a.size_win()
```

### Move

```py
from main import Move

a = Move(True, 20, 30)
a.move_win()
```

## Test

```sh
PYTHONPATH=./src pytest
```

## Future Features

- Something to name windows<br>
- Something to use move and size with window by name<br>
- Something to get the size and position of a window by name<br>
- Something that uses the size and position of two windows by name and calculates distance between<br>
