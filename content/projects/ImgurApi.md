
---
title: ImgurApi
type: page
---
# ImgurApi

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
