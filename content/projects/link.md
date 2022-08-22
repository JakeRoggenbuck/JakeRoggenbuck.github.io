
---
title: link
type: page
---

[See on Github](https://github.com/jakeroggenbuck/link/)

# link ![Rust](https://img.shields.io/github/workflow/status/jakeroggenbuck/link/Rust?style=for-the-badge)

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
