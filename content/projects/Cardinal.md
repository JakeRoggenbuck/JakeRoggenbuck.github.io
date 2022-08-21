
---
title: Cardinal
type: page
---
# Cardinal
Cardinal is a web server that serves data from the frc1678/server project to the frc1678/viewer project.

![image](https://user-images.githubusercontent.com/35516367/134791598-f5f74a83-e551-4986-abc8-a08078a237f6.png)

# Use
There are two main uses for Cardinal. Both involve serving data to the Viewer app. The most important data that is sent is from the frc1678/server project and is current match and competition data. The second type of data is auto generated testing data.

# Setup
1. Export the value DJANGO_SECRET_KEY before running
	- This key needs to be completely original
	- This key should never be in git
	- You can use this command to generate a key
	```
	dd if=/dev/urandom bs=60 count=1 | base64
	```

2. python3 manage.py migrate
	- Create and update the database

	```
	python3 manage.py migrate
	```


3. python3 manage.py createsuperuser
	- Create the admin account used for making a auth token

	```
	python3 manage.py createsuperuser
	```
	

4. Create an auth token
	- Run the server
	- Open the website at /admin
	- Log in
	- Create a new token
	- Copy that token into the request
	
# Running
1. Make sure to finish with setup steps
2.
- Start the server (test)
	```
	./scripts/testserver.sh
	```
- Start the server (production)
	```
	./scripts/runserver.sh
	```

![image](https://user-images.githubusercontent.com/35516367/137597536-36202b2d-5e95-4113-88c5-ab4b51135fb7.png)


# API Usage

![image](https://user-images.githubusercontent.com/35516367/137597487-8b4bc918-fc06-423f-987a-86fbe473351c.png)


## Test Data Generator
```
# Format
curl -X GET "https://cardinal.citruscircuits.org/cardinal/api/generate/<schema_name>/?format=json"
```
```
# Example
curl -X GET "https://cardinal.citruscircuits.org/cardinal/api/generate/calc_tba_team_schema/?format=json"
```
```
# Example with count
curl -X GET "https://cardinal.citruscircuits.org/cardinal/api/generate/calc_tba_team_schema/?format=json&count=10"
```

#### Output
```json
[
  {
    "auto_high_balls_percent_inner": 89.7359,
    "tele_high_balls_percent_inner": 16.1893,
    "climb_all_success_avg_time": 96.7847,
    "team_name": "rNvKwQbEoMBnA",
    "climb_percent_success": 46.9206,
    "climb_all_successes": 13,
    "climb_level_successes": 8,
    "park_successes": 16,
    "auto_line_successes": 42,
    "team_number": 4665
  }
]
```

# Roadmap
#### 1. System architecture & framework decision
	- Decide what framework we will use
	- Decide on the architecture (framework dependent)

#### 2. Basic functioning system & initial tests
	- Run the system on every developer's computer and troubleshoot
	- Get automatic testing working with Github actions

#### 3. Automatic test data generator API
	- Fully generate data the view can use to test from this service
	- Serve test data for Viewer to easily pull using REST standards

#### 4. Serve current competition data
	- Pull data from Mongodb about the current competition
	- Setup views to serve this data
	- Collect time deltas per user of when the last data was pulled
	- Setup database for time deltas
	- Create functionality to pull data that has been changed since last pull

#### 5. Discuss specifics of hosting, etc.
	- Where will we host this web server
		note: this isn't as time-sensitive as development

#### 6. Help frontend integrate this API into Viewer. <b>(Currently here)</b>
	- Create documentation on the API and it's proper use
	- Support the Viewer's developers in their implementation efforts

#### 7. Full systems test
	- Run the server with test data from scouts
	- Run this web server and pull data from it
	- Test Viewer and its ability to pull data

