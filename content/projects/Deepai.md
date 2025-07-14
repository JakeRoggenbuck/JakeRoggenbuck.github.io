
---
title: Deepai
type: page
date: 2020-08-11T00:00:00
tags: ["Python"]
description: "Use the deepdream API and other APIs from deepai to convert, upscale, and change images in interesting ways"
---


# Deepai
Use the deepdream API and other APIs from deepai to convert, upscale, and change images in interesting ways

## Use

#### Use as CLI
```
python3 main.py -i ~/Downloads/input_image.jpg -o image.png -n NeuralStyle -s ~/Downloads/vangohg.png

python3 main.py -i ~/Downloads/input_image.jpg -o image.png -n DeepDream
```

#### Use as library
```py
from main import DeepImage

# NeuralStyle
style_name = "NeuralStyle"
input_file = "~/Downloads/input_image.png"
output_file = "~/Downloads/output_image.png"
style_image = "~/Downloads/style_image.png"

deep = Deep(style_name, input_file, output_file, style_image)


# DeepDream
style_name = "DeepDream"
input_file = "~/Downloads/input_image.png"
output_file = "~/Downloads/output_image.png"

deep = Deep(style_name, input_file, output_file)
deep.download()
```

## Config
Make the config and get an api key at [deepai.org](https://deepai.org)
`config.py`
```py
KEY = "API-KEY"
urls:
    - DeepDream: "https://api.deepai.org/api/deepdream"
    - Colorizer: "https://api.deepai.org/api/colorizer"
    - NeuralStyle: "https://api.deepai.org/api/neural-style"

```

## Example
![Example image](https://github.com/JakeRoggenbuck/Deepai/blob/master/images/34d5700d-73e2-4d2c-99f7-9ecbd125e68c.jpg?raw=true)
![Example image](https://github.com/JakeRoggenbuck/Deepai/blob/master/images/clones.png?raw=true)
