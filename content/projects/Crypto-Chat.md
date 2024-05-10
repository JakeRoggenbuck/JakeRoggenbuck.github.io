
---
title: Crypto-Chat
type: page
date: 2020-01-25T00:00:00
tags: ["Python"]
description: "None"
---


<br>

# Crypto-Chat

# Setup
To get started with cryptochat you first need to have firebase installed
To do so just run `pip install --user firebase`

# Use
The chat will prompt you with `Mode de/en:`
This is asking if you are decrypting a message or encrypting a message
Then if you are encrypting it will ask you for your `message` then a `key`
If you are decrypting it will ask for a `key` then it will print out all the messages decrypted by your key.
This means that it if you decrypt messages with the wrong key they will look line nonsense.

After encrypting the message, the program sends the encrypting message to the firebase database.
This will allow anyone else to be able to view the encrypted message in their terminal with the version of the program. This makes it so you can have private group chats using very basic encryption.
