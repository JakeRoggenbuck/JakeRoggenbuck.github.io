
---
title: mongofastlogger
type: page
---
<a href="https://pypi.org/project/mongofastlogger/">![Version](https://img.shields.io/pypi/v/mongofastlogger)</a>

# Logger
A simple and fask logging library that uses the power of mongodb to save and query logs (with built in cli)

## Cli
```sh
# search
search <tag> <logger_name>
mongofastlogger search Info

# clear
clear <logger_name>
mongofastlogger clear

# log
log <tag> <message> <logger_name>
mongofastlogger log Info "This is a log message"

# view
view <logger_name>
mongofastlogger view

# export
export <filename> <logger_name>
mongofastlogger export filename.log

# last
last <metric> <amount> <logger_name>
mongofastlogger last hours 3

# help
find commands
python3 mongofastlogger

help with specific commands
mongofastlogger command --help

# other info
<logger_name> is optional and is 'logs' by default
```

## Library
```py
from mongofastlogger import LogViewer, Logger


# Make logger
logger = Logger()
# Log message with tag of "Something"
logger.log("Something", "This is bad as well i guess but i dont actually know")
# Log message with tag of "Something" and display log in console
logger.log("Something", "This is a message", display=True)

# Make Viewer
viewer = LogViewer()
# Print all logs
viewer.view_log()

# Search logs that have the tag "Something"
viewer.search_logs_by_tag("Something")
# Search logs in the last 3 days
viewer.check_by_time("days", 3)
# Export logs to example.log
viewer.export_log("example.log")

print("Production")

# Make logger with name
production_logger = Logger("Production")
production_logger.log("Error", "Critical error in production")

# Make viewer with name
production_viewer = LogViewer("Production")
production_viewer.view_log()
```

### Todo
Make readme more easy to read, especially comments in code and command line instructions<br>
Make last use "amount metric" format because it is more intuitive<br>
Make last have more time metrics, like month and year<br>
Make actual docs for how to use this and its commands, and cli<br>
