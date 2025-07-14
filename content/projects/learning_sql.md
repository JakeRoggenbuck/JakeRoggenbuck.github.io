
---
title: learning_sql
type: page
date: 2020-08-04T00:00:00
tags: ["Python"]
description: "None"
---


# learning_sql

## Connecting
```py
connection = sqlite3.connect("myTable.db")
```

## Creating a table
```py
 sql_command = """
 CREATE TABLE employee (
 staff_number INTEGER PRIMARY KEY,
 fname VARCHAR(20),
 lname VARCHAR(30),
 gender CHAR(1),
 joining DATE);"""
```

## Writing the empty table to the db
```py
crsr = connection.cursor()
crsr.execute(sql_command)
connection.commit()
```

## Writing values to db
### Getting data
```py
First = input("First: ")
Last = input("Last: ")
Gender = input("Gender: ")
Joining = input("Joining: ")
```
### Adding data to the correct syntax
```py
sql_command = "INSERT INTO employee"
sql_fields = "(staff_number, fname, lname, gender, joining)"
sql_data = f"VALUES (NULL, '{First}', '{Last}', '{Gender}', '{Joining}');"
```
### Excecuting the command
```py
cursor.execute(sql_command + sql_fields + sql_data)
```
### Make sure to commit and close
```py
connection.commit()
connection.close()
```

