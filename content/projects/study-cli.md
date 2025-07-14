
---
title: study-cli
type: page
date: 2022-06-13T00:00:00
tags: ["Go"]
description: "CLI tool to quiz and learn a question dataset. This can be used for memorizing any sort of multiple choice compliant quizzes."
---


# study-cli ![Go](https://img.shields.io/github/actions/workflow/status/jakeroggenbuck/study-cli/go.yml?branch=main&style=for-the-badge)
CLI tool to quiz and learn a question dataset. This can be used for memorizing any sort of multiple choice compliant quizzes. Similar to flashcards, except no need to write out flash cards, or carry them with you. Also, study-cli can be set to random ask if you'd like to study at random times.

## Question Set Schema
```go
type Single struct {
    Name string `json:"name"`
    Correct int `json:"correct"`
    Answers []string `json:"answers"`
    Question string `json:"question"`
}
```

```json
[
    {
        "name": "question one",
        "correct": 0,
        "answers": [ "A. yes", "B. no" ],
        "question": "Which of the two options is a three letter world?",
    }
]
```

## TODO
- Add dataset manager
