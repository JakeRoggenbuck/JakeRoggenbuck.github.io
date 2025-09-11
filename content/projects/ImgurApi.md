---
title: ImgurApi
type: page
date: 2020-09-29T00:00:00
tags: ["Python"]
description: "Simple Imgur library to interface with the Imgur web API "
---

# ImgurApi

Simple Imgur library to interface with the Imgur web API

```py
from main import Imgur

# Create object
imgur = Imgur()


# Upload image
imgur.upload("test.jpg")

# Get viewable images (Not Blocked Not Deleted)
imgur.get_viewable_images()

# Block image by hash (Know as "id")
imgur.block("<image hash>")

# Delete image by hash (Know as "id")
imgur.delete("")

# View all things in the uploaded collection
imgur.view()
```
