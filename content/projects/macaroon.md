
---
title: macaroon
type: page
date: 2022-06-10T00:00:00
tags: ["Go"]
description: "Add C style macros to code in Go."
---

{{< github repo="jakeroggenbuck/macaroon" >}}

<br>

# Macaroon - Go Macros & Preprocessor ![Go](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/macaroon/go.yml?branch=main&style=for-the-badge)
Add C style macros to code in Go. Not to be confused with [go-macaroon/macaroon](https://github.com/go-macaroon/macaroon) about "Cookies with Contextual Caveats for Decentralized Authorization in the Cloud".

# Quick Start
Use the `set` keyword to define the value of a simple macro.

#### Before
```go
package main

#set NAME "jake"

func main() {
    fmt.Println(NAME)
}
```

#### After
```go
package main

func main() {
    fmt.Println("jake")
}
```

# Running
```sh
macaroon main.gomac && go build
```
