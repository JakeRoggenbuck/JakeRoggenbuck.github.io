
---
title: Reddit_Downloader
type: page
date: 2020-08-11T00:00:00
tags: ["Python"]
description: "None"
---

{{< github repo="jakeroggenbuck/Reddit_Downloader" >}}

<br>

# Reddit_Downloader

## Get page
Because Reddit requires authentication, it's easier to go to the website and get the page source to parse the image urls

## Config
```py
element = "classname or elecment id"
filename = "example.txt"
directory = "example"
```

## Running
```py
# Get filename and directory from config
FILENAME = config.filename
DIRECTORY = config.directory

# Make GetUrls object and give it filename
geturls = GetUrls(FILENAME)
# Parse and Extract urls
geturls.parse_urls()
geturls.extract_url()
# Gets urls list and give to download obejct
urls = geturls.image_urls

# Setup directory
_setup = Setup(DIRECTORY)
_setup.setup()

# Make download object and download list of urls
_dowload = DownloadUrls(urls, DIRECTORY)
_dowload.download()
```
