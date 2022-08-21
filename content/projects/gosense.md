
---
title: gosense
type: page
---
# sense-go
Sense the directories around you, are they git repositories, what language, etc.

![Go](https://img.shields.io/github/workflow/status/jakeroggenbuck/sense-go/Go?style=for-the-badge)

## Languages
[ :snake: sense-py](https://github.com/JakeRoggenbuck/sense-py) || [:crab: sense-rs](https://github.com/JakeRoggenbuck/sense-rs) || 
[:hamster: gosense](https://github.com/JakeRoggenbuck/gosense) || [🇨 sense-c](https://github.com/JakeRoggenbuck/sense-c)

## Why?
#### Why so many langs?
Because I write projects pretty regularly in all of these languages and want a consistent API and available library support for all of them.

## API

### Git

```go
has_git(path string) bool
is_local_git(path string) bool
```

### Language
```go
get_lang(path string) Lang
```

## Example
```go
func main() {
    lang := get_lang("./")
    fmt.Println(lang.String())

    git := has_git("./")
    if git {
        fmt.Println("Is git!")
    } else {
        fmt.Println("Is not git.")
    }

    local := is_local_git("./")
    if local {
        fmt.Println("Is local!")
    } else {
        fmt.Println("Is not local.")
    }
}
```

## Supported langs
- [x] Python
- [x] JavaScript
- [x] Rust
- [x] Java
- [x] Go
- [ ] TypeScript
- [ ] C
- [ ] CPP

## Contributing
If you would like to add features or language support, that would be amazing!

