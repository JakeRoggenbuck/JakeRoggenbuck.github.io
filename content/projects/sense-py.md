
---
title: sense-py
type: page
---
# sense-py
Sense the directories around you, are they git repositories, what language, etc.

## Languages
[ :snake: sense-py](https://github.com/JakeRoggenbuck/sense-py) || [:crab: sense-rs](https://github.com/JakeRoggenbuck/sense-rs) || 
[:hamster: gosense](https://github.com/JakeRoggenbuck/gosense) || [🇨 sense-c](https://github.com/JakeRoggenbuck/sense-c)

## Why?
#### Why so many langs?
Because I write projects pretty regularly in all of these languages and want a consistent API and available library support for all of them.

## API

### Git

```py
has_git(path: str) -> bool
is_local_git(path: str) -> bool
```

### Language
```py
get_lang(path: str) -> Lang
```

## Example
```py
def main():
    language = lang.get_lang("./")
    print(language)

    has_git_dir = git.has_git("./")
    if has_git_dir:
        print("Is git!")
    else:
        print("Is not git.")

    local = git.is_local_git("./")
    if local:
        print("Is local!")
    else:
        print("Is not local.")
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
