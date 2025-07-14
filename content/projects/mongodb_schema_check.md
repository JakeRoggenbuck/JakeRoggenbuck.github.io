
---
title: mongodb_schema_check
type: page
date: 2020-09-23T00:00:00
tags: ["Python"]
description: "None"
---


# mongodb_schema_check

```py
from pymongo import MongoClient
from typeschemalib import typeschemalib


class Database:
    def __init__(self, location: str = "localhost", port: int = 27017):
        """Set defaults and connect"""
        self.location = location
        self.port = port
        self.connect()

    def connect(self):
        """Create client, database and collections"""
        self.client = MongoClient(self.location, self.port)
        self.db = self.client.my_database
        self.profiles = self.db.profiles
        self.messages = self.db.messages

    def write_profile(self, document):
        """Check schema of document using schema file"""
        schema = "schema/profile.stml"
        valid = typeschemalib.schema_check(schema, document)
        if valid is not True:
            # Not valid, print error
            print(valid)
        else:
            # All good schema, insert and print
            print(document)
            self.profiles.insert_one(document)


if __name__ == "__main__":
    # Get data to insert
    data = {
        "name": input("Name: "),
        "age": int(input("Age: ")),
        "lang": input("Lang: "),
        "percent": float(input("Percent: "))
    }
    db = Database()
    db.write_profile(data)
```
