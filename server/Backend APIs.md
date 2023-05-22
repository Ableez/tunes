# Backend APIs

## Tasks

Get general tasks all together
<!--  -->
```md
### GET

#### [http://localhost:3500/tasks](http://localhost:3500/tasks)

will be deprecated due to security risks
```
<!--  -->

Get a users task
<!--  -->
```md
### GET

#### [http://localhost:3500/users/tasks](http://localhost:3500/users/tasks)

body: {
    "creator_id": "6467d04a40724ccd4752f31f" 
    // enter user's _id
}

```
<!--  -->

Initial task creation will be just these four parameters:

<!--  -->
```md
### POST

#### [http://localhost:3500/tasks](http://localhost:3500/tasks)
```
<!--  -->

<!--  -->
```json
//Create new task
{
    {
        "title": "THIRD TASK SALES",
        "creator_id": "6467d04a40724ccd4752f31f",
        "due_date": "2023-05-15T18:31:57.282Z",
        "reminder": "2023-05-15T18:31:57.282Z"
    }
}
```
<!--  -->

To add or update further informations about a task

<!--  -->
```md
### PATCH

#### [http://localhost:3500/tasks](http://localhost:3500/tasks)
```
<!--  -->

<!--  -->
```json
//UPDATE TASK
{
    "title": "finish the site", //[x]
    "description": "test run task", //[x]
    "creator_id": "645f596eb55eef0227643136", //[x]
    "assignee_ids": [
        "645f596eb55eef0227643136"
    ], //[x]
    "due_date": "2023-05-15T18:31:57.282Z", //[x]
    "repeat": "weekly", //[x]
    "custom_repeat": {
        "times": [
            1, 
    //[x]
            5, 
    //[x]
            6
        ], 
//[x]
        "interval": "daily"
    }, //[x]
    "reminder": "2023-05-15T18:31:57.282Z", //[x]
    "steps": [
        "make the backend", 
//[x]
        "build the front end"
    ], //[x]
    "notes": "i wanna make sure im done with this shitt ASAP", //[x]
    "progress": "not started", //[x]
    "task_list": "My day"
}
```
<!--  -->

### Add files to task

<!--  -->
```md
### PATCH

#### [http://localhost:3500/tasks/:task_id](http://localhost:3500/tasks/:_id)
```
<!--  -->

<!--  -->
```json
{
    // in postman? use add file to form data tab
    // frontend view? use add file using an input [type=file multiple]
}
```
<!--  -->
Get user's tasks
<!--  -->
```md
### GET

#### [localhost:3500/tasks?task_id=INSERT_ID](localhost:3500/tasks?task_id=6467d0ba40724ccd4752f325)
```
<!--  -->

<!--  -->
Delete user's tasks
<!--  -->
```md
### DELETE

#### [http://localhost:3500/tasks/](http://localhost:3500/tasks/)
```
<!--  -->

<!--  -->
```json
{
   "task_id" : "[INSERT]",
   "user_id" : "[INSERT]",
}
```
<!--  -->
