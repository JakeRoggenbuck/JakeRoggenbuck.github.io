---
title: January 2023
type: page
---

I joined AggieWorks as a Technical Product Manager for a new project. I spent a lot of time working on AggieWorks and School. I didn’t do as much for personal projects but I still have some interesting things to share for this month.

I started implementing different data structures in C. Then I started incorporating these into a handful of projects.

### ths - local thesaurus in C [[link]](https://github.com/JakeRoggenbuck/ths)

Use of `djb2` hash and a binary tree

```c
void insert(struct Node *base, struct Word *word) {
    if (word->id < base->id) {
        if (base->left == NULL) {
            base->left = build_node(word);
        } else {
            insert(base->left, word);
        }
    }

    if (word->id > base->id) {
        if (base->right == NULL) {
            base->right = build_node(word);
        } else {
            insert(base->right, word);
        }
    }
}
```

### mountain - lightweight tool to auto mount drives with inotify [[link]](https://github.com/JakeRoggenbuck/mountain)

This uses the sys/inotify library for linux to create a callback for when files are created on the system. It checks specifically for files in /dev with a certain name pattern.

```c
for (int i = 1; i < argc; ++i) {
        if (argv[i][0] == '-') {
            if (!has_option) {
                if (does_match(argv[i], "-v", "--version")) {
                    args.option = VERSION;
                    has_option = 1;
                } else if (does_match(argv[i], "-h", "--help")) {
                    args.option = HELP;
                    has_option = 1;
                }
            }

            if (does_match(argv[i], "-V", "--verbose")) {
                args.verbose = 1;
            }

            if (does_match(argv[i], "-m", "--mount")) {
                args.mount = 1;
            }

            if (does_match(argv[i], "-n", "--notify")) {
                args.notify = 1;
            }
        } else {
            // Only accept the first non-flag as a file
            if (!has_file) {
                size_t len = strlen(argv[i]);
                args.filename = malloc(len * sizeof(char));
                strcpy(args.filename, argv[1]);
                has_file = 1;
            }
        }
    }
```

### **one-time-pad-gen [[link]](https://github.com/JakeRoggenbuck/one-time-pad-gen)**

Generate one time pads for use in simple manual ciphers. This project was interesting because learning to generate a bunch of new random numbers is an interesting problem.

```c
$ otpg 10
```

```c
L M K J S  J Y O D C  S E M V E  T W Y W J  B A Z D C
C B W T W  I E K U O  D D O T G  S L N H H  T A F U Z
O V B Q A  D U E B N  A K S N G  G Q M W J  S P W H W
D B Y I V  X Z S A R  S D L Y F  Y B R Q O  Z Y E L V
P E K L N  I R O G Z  L G A D I  R Y O C W  V B X M T
N L S R X  N I D Z U  S J L H R  M S Z P Y  I G W W J
U R M U F  F H S X B  R M J W N  F P Y S Y  Q H S R W
S Z C O X  N L Q Z H  V F O Q E  R J T B G  I I X H B
V X I P O  E I Q I Y  P W J G X  Q D E H T  L Y D E B
L M K I T  N F S V U  J B C B L  B Q J K W  H D C N M
```

```c
void generate(int rows) {
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < COLS; ++j) {
            for (int k = 0; k < WORDS; ++k) {
                int v = rand() % 26;
                printf("%c ", tochar(v));
            }
            printf(" ");
        }
        printf("\n");
    }
}

void ref_pad() {
    for (int i = 0; i < 26; ++i) {
        printf("%c: ", tochar(i));
        for (int j = 0; j < 26; ++j) {
            printf("%c ", tochar(j));
        }
        printf("\n");

        printf("   ");
        for (int j = 0; j < 26; ++j) {
            printf("%c ", tochar((j + i) % 26));
        }
        printf("\n");
        printf("\n");
    }
}

int get_seed() {
    int val;
    FILE *fp;

    fp = fopen("/dev/urandom", "rb");
    fread(&val, sizeof(int), 1, fp);
    fclose(fp);

    return val;
}
```
