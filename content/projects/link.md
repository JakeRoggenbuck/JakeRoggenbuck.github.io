
---
title: link
type: page
date: 2021-05-26T00:00:00
tags: ["Rust"]
description: "I url shortener using Rocket.rs & Diesel.rs; being used in production"
---

{{< github repo="jakeroggenbuck/link" >}}

<br>

# link ![Rust](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/link/rust.yml?branch=main&style=for-the-badge)

## Description
A public mirror of the private development link repository, without the .env and Rocket.toml hosted on heroku

## Setup
.env needs the following
```sh
DATABASE_URL=url or uri to database
AUTH_KEY=an auth key
```
Rocket.toml
```toml
# Database
[global.databases.redirect-api]
url = "postgres://<user>:<password>@localhost/redirect-api"
```
