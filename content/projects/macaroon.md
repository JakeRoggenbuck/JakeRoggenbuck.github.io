
---
title: macaroon
type: page
---
# Macaroon - Go Macros & Preprocessor ![Go](https://img.shields.io/github/workflow/status/jakeroggenbuck/macaroon/Go?style=for-the-badge)
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
