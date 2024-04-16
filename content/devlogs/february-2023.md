---
title: Febuary 2023
date: 2023-02-28T00:00:00
type: post
---

This month I was working a lot on school and clubs I am associated with so I didn’t have a bunch of time to work on personal projects, but I do have some highlights to share.

### powerd [[link]](https://github.com/JakeRoggenbuck/powerd)

power(d)aemon - check battery capacity efficiently using the inotify library written in C

```c
fd = inotify_init();
if (fd < 0) {
    print_and_exit("Couldn't initialize inotify.\n");
}

char filepath[200];
sprintf(filepath, "/sys/class/power_supply/%s", filename);

wd = inotify_add_watch(fd, filepath, IN_CREATE | IN_MODIFY | IN_DELETE);

if (wd == -1) {
    printf("Couldn't add watch to \"%s\"\n", filepath);
    exit(1);
} else {
    printf("Watching \"%s\"\n", filepath);
}
```

### manyrepr - view input in multiple formats at once [[link]](https://github.com/JakeRoggenbuck/manyrepr)

I got to use `std::map` in C++ and other interesting concepts. This project is very early in development but I plan to make it useful. I often have base64 or binary that I need to turn into ascii or I have a text I need to urlencode. This tool doesn't even ask what option you want, it just does it all and the use can copy what they want. The value of being able to have it convert input into "all of the above" make the use of this tool really fast,

```cpp
void get_opt(std::string intype, enum Options &opt) {
    std::map<std::string, enum Options> argmap;
    std::map<std::string, enum Options>::iterator it;

    argmap["--text"] = TEXT;
    argmap["--hex"] = HEX;
    argmap["--bin"] = BIN;
    argmap["--base64"] = BASE64;
    argmap["--dec"] = DEC;
    argmap["--rot13"] = ROT13;
    argmap["--urlenc"] = URLENC;

    it = argmap.find(intype);
    if (it != argmap.end()) {
        opt = it->second;
    }
}
```

### New Draft.vim features [[link]](https://github.com/JakeRoggenbuck/draft.vim)

I also added features to my project from 3 years ago `draft.vim`

[https://github.com/JakeRoggenbuck/draft.vim/releases/tag/0.6](https://github.com/JakeRoggenbuck/draft.vim/releases/tag/0.6)
