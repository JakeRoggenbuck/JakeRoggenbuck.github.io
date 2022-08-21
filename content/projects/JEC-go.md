
---
title: JEC-go
type: page
---
# JEC-go ![Go](https://img.shields.io/github/workflow/status/jakeroggenbuck/JEC-go/Go?style=for-the-badge)
Jabacat's Easy Config

[JEC-py](https://github.com/jabacat/JEC-py) |
[JEC-rs](https://github.com/jabacat/JEC-rs) |
[JEC-go](https://github.com/jabacat/JEC-go) |
[JEC-c++](https://github.com/jabacat/JEC-cpp) |
[JEC-kt](https://github.com/jabacat/JEC-kt) |
JEC-c |
JEC-zig |
JEC-ts

## API
```go
ConfigFile
  - Exists
  - Remove
  - Create
  - FromHome
  
ConfigDir
  - Exists
  - Remove
  - Create
  - FromHome
```

## Usage
```go
conf := ConfigFile{"./test.conf"}

if !conf.Exists() {
	conf.Create()
}

dir := ConfigDir{"./config/"}

if !dir.Exists() {
	dir.Create()
}

conf.Remove()
dir.Remove()

conf = ConfigFile{""}.FromHome("./test.conf")
strings.Contains(conf.path, "home") // true at /home/user/test.conf
```
