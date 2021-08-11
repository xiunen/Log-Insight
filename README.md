# Log-Insight
Log parse, comment, mark, filter quickly and finally find out the root cause. 

## Server API
### POST /logfiles
Upload a log file
### GET /logfiles
List all log files
#### Response
```
[
  {
    filename:"foo.log",
    createdAt:"2021-08-11 12:00:12"
  }
]
```
### GET /logfile/:fileid
Show logs in log file
|Parameter|type|explaination|
|--|--|--|
|omit|bool|include omit lines or not, default false|
|token|string|search token, match content of log|
|mark|enum|mark type, 0 none, 1 red 2 green 3 orange 4 blue |
|remark|bool|only remarked lines or include not remarked lines|
### PUT /log/:logid
Comment or mark a log
|Parameter|type|explaination|
|--|--|--|
|omit|bool|wether omit the log line|
|remark|string|add comment the log line|
|mark|enum|mark type,, 0 none, 1 red 2 green 3 orange 4 blue|
### GET /logfile/:fileid/config
Get logfile config 
#### Response
```
[
  {
    name:"time",
    expression:"^\[\d{13}\]",
    priority:1
  }
]
```

### POST /logfile/:fileid/configs
Add logfile config 
|Parameter|type|explaination|
|--|--|--|
|name|string|column name|
|expression|string|column extract expression|
### PUT /logfile/:fileid/config/:configid
Update logfile config 
|Parameter|type|explaination|
|--|--|--|
|name|string|column name|
|expression|string|column extract expression|
|priority|integer|display priority|



