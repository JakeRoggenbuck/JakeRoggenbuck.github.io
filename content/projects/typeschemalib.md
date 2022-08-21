
---
title: typeschemalib
type: page
---
# typeschemalib
A yaml like schema that can be used to check dictionaries for correct schema

## Schema file
#### schema example
```
point: Int
my_string: Str
grade: Float
```

#### data example
```json
{"point": 45, "my_string": "Hey", "grade": 4.5}
```

## Checking data for correct schema
### Test parse with stml file
```py
from typeschemalib import typeschemalib


if __name__ == "__main__":
    data = {"point": 45, "my_string": "Hey", "grade": 4.5}

    # Validate data from schema file
    schema = "test.stml"
    valid = typeschemalib.schema_check(schema, data)
    print(valid)

    # Validate data from list of schema
    schema = ["point: Int", "my_string: Str", "grade: Int"]
    valid = typeschemalib.schema_check(schema, data)
    print(valid)

    # Validate data from dict of values
    schema = {"point": "Int", "my_string": "Str", "grade": "Int"}
    valid = typeschemalib.schema_check(schema, data)
    print(valid)
```

## Todo
Make schema have regex<br>
Make documentation for stml writer<br>
Add object type and class checker, isinstance issubclass `time: DateTimeObject`
