
---
title: sense-rs
type: page
date: 2022-06-29T00:00:00
tags: ["Rust"]
description: "Sense the directories around you, are they git repositories, what language, etc."
---


# sense-rs
Sense the directories around you, are they git repositories, what language, etc.

![Rust](https://img.shields.io/github/workflow/status/jakeroggenbuck/sense-rs/Rust?style=for-the-badge)

## Languages
[ :snake: sense-py](https://github.com/JakeRoggenbuck/sense-py) || [:crab: sense-rs](https://github.com/JakeRoggenbuck/sense-rs) || 
[:hamster: gosense](https://github.com/JakeRoggenbuck/gosense) || [🇨 sense-c](https://github.com/JakeRoggenbuck/sense-c)

## Why?
#### Why so many langs?
Because I write projects pretty regularly in all of these languages and want a consistent API and available library support for all of them.

## API

### Git

```rs
has_git(path: String) -> bool;
is_local_git(path: String) -> bool;
```

### Language
```rs
get_lang(path: String) -> Lang;
```

## Example
```rs
fn main() {
    let language = get_lang("./".to_string());
    println!("{}", language);

    let git_dir = has_git("./".to_string());
    if git_dir {
        println!("Is git!");
    } else {
        println!("Is not git.");
    }

    let local = is_local_git("./".to_string());
    if local {
        println!("Is local!");
    } else {
        println!("Is not local.");
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
