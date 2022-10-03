
---
title: tbaTestScripts
type: page
---

[See on GitHub](https://github.com/jakeroggenbuck/tbaTestScripts/)

# tbaTestScripts

### TBA API key
- Create an api key
- [API docs](https://www.thebluealliance.com/apidocs)
- Make a `api_key.py` file
- Add request_headers = {'X-TBA-Auth-Key': 'Your Key Here'}

### Uses

#### averageBumperColor.py

In `averageBumperColor.py` the url `event/{event_code}/matches/simple` is used.
Example of the event_code could be `2020caln`.
The feilds used are `["alliances"]["blue"]["team_keys"]` and `["alliances"]["red"]["team_keys"]`
The data it returns is a json of the average bumper/alliance color used
```
{
	'frc6560': -4,
	'frc115': 0,
	'frc114': -6,
	'frc1678': -6
}
```
#### matchColorMaker.py

In `matchColorMaker.py` the url `event/{event_key}/matches/simple` is used.
Example of the event_key could be `2020caln`.
The feilds used are `["alliances"]["blue"]["team_keys"]` and `["alliances"]["red"]["team_keys"]`
The data it prints is two lists with the red team and then the blue team in match
```
['frc1678', 'frc973', 'frc4'] ['frc6560', 'frc115', 'frc114']
['frc1678', 'frc973', 'frc4'] ['frc6560', 'frc115', 'frc114']
['frc1678', 'frc973', 'frc5089'] ['frc6560', 'frc115', 'frc114']
['frc1678', 'frc973', 'frc4'] ['frc359', 'frc1388', 'frc3309']
```
#### teamsMapView.py

In `teamsMapView.py` the url `event/{tba_key}/teams` is used.
Example of the event_code could be `2020mosl`.
The feilds used are `team["nickname"]` and `team["state_prov"]`
The data it prints are the teams and their state/province
```
Metool Brigade, Illinois
RAVEN Robotics, Missouri
Tech Heads, Missouri
Citrus Circuits, California
```

#### teamsViewer.py

In `teamsViewer.py` the url `event/{tba_key}/teams` is used.
Example of the event_code could be `2020mosl`.
The feilds used are `team["key"]`, `team["nickname"]`, `team["city"]`, `team["state_prov"]`, and `team["rookie_year"]`
The data it prints are the teams and a few facts about them
```
Team frc2978 Cavaliers is from Saint Louis, Missouri and their rookie year was 2009
Team frc302 The Dragons is from Lake Orion, Michigan and their rookie year was 1999
Team frc3330 System of the Corn  is from Saint Charles, Missouri and their rookie year was 2010
Team frc3397 Robolions is from Saint Louis, Missouri and their rookie year was 2010
```

#### teamsSpecificInfo.py

In `teamsSpecificInfo.py` the url `team/{team_key}` is used.
Example of the team_key could be `frc253`.
The data it prints all data about the given team
```
{'address': None, 'city': 'Millbrae', 'country': 'USA', 'gmaps_place_id': None, 'gmaps_url': None, 'home_championship': {'2020': 'Houston'}, 'key': 'frc253', 'lat': None, 'lng': None, 'location_name': None, 'motto': None, 'name': 'Caccia Plumbing Inc/Millbrae Lions Club/Bishop Wisecarver/San Mateo Union High School District/Google/FIRST NorCal/Lockheed Martin/Santosh Abraham/SolidWorks/Comcast NBCUniversal/GATE/Intuitive Foundation/Millbrae Leos Club/San Carlos Kiwanis Club/Upward Credit Union/AGC Acupuncture Clinic/Rotary Club of Millbrae/Millbrae T4U/Tea Link/San Mateo Credit Union/Numis International Inc&Mills High School', 'nickname': 'Boba Bots', 'postal_code': '94030', 'rookie_year': 1999, 'school_name': 'Mills High School', 'state_prov': 'California', 'team_number': 253, 'website': 'https://millsroboticsteam253.com'}
```
