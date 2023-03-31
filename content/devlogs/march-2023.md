---
title: March 2022
type: page
---

### Coming Soon - **Devious Code Contest**

I started the website for the soon to come Devious Code Contest found at [deviouscc.org](https://deviouscc.org/). This contest will happen sometime in the next year. The problems have been chosen and written but other details are still being decided.

### **satellite-c - Practice for writing satellite subsystems in C [[link]](https://github.com/JakeRoggenbuck/satellite-c)**

This was a super interesting project that is still in development. I join a club called [Space and Satellite Systems](https://www.ucdspaceandsatellitesystems.com/) and we will be writing code for a satellite in C.

```c
/* Build the task list and alloc the first chunk for the internal array */
struct TaskList *build_tasklist() {
    struct TaskList *l = malloc(sizeof(struct TaskList));

    l->size = 8;
    alloc_list(l);
    l->index = 0;

    return l;
}

/* Allocate the internal array with the size */
void alloc_list(struct TaskList *l) {
    l->task_list = malloc(l->size * sizeof(struct Task));
}

/* Add 8 to the size so that the alloc_list do so in chunks */
void add_list_chunk(struct TaskList *l) { l->size += 8; }

/* Add a task to the end of the internal array */
void add(struct TaskList *l, struct Task *t) {
    if (l->index == l->size) {
        add_list_chunk(l);
        alloc_list(l);
    }

    l->task_list[l->index] = t;
    l->index++;
}

/* Get a task from the end of the internal array */
struct Task *pop(struct TaskList *l) {
    if (l->index == 0) {
        return NULL;
    }

    l->index--;
    return l->task_list[l->index];
}

int empty(struct TaskList *l) { return l->index == 0; }
```

### Updating the LocalList [[link]](http://thelocallist.org)

I added some small UI changes to give it a more modern look. New more centered logo and better borders around the elements and below the search bar.

**New on left - Old on right**

![Local List](https://cdn.discordapp.com/attachments/697154250052075543/1091247246810550312/Local_List.png)

### readme - Create readme files with one command [[link]](https://github.com/JakeRoggenbuck/readme)

```c
void create_readme(char *fname) {
    char cwd[PATH_MAX];

    if (getcwd(cwd, sizeof(cwd)) != NULL) {
        char *dirname = last_dir(cwd);

        FILE *f;
        f = fopen("README.md", "w");

        if (f == NULL) {
            printf("Unable to create file.\n");
            exit(1);
        }

        fputs("# ", f);
        fputs(dirname, f);
        fputs("\n", f);
    } else {
        perror("getcwd() error.\n");
    }
}
```

###
