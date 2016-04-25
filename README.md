

## Requirements
- Bower
- Nodejs
- NPM
- Install mongoDb and add it to your PATH

## Task
I have completed the task in all 3 JS frameworks (Angular, react and polymer).
Note:  Major framework is Angular

### Feature – Comment-TimeLapse
We are going to build component that displays how long ago the comment was posted.
General Description: - “As a User, Given the list of comments includes at least 1 comment, When the list is displayed, Then I want to see how long ago has the comment been posted. Just like the one on Github next to the file name. 1 minute ago, 2 days ago, etc"

### Acceptance criteria
- “As a User, Given the comment was posted less than 59 seconds ago, When the comment is displayed in the list, Then I want to always see “1 minute ago”
- “As a User, Given the comment was posted more than 59 seconds ago but less than 59 minutes ago, When the comment is displayed in the list, Then I want to see the amount of minutes elapsed, for example “39 minutes ago” or "25 minutes ago" etc...
- “As a User, Given the comment was posted more than 59 minutes ago but less than 23 hours and 59 mins ago, When the comment is displayed in the list, Then I want to see the amount hours elapsed, for example “4 hours ago” or "12 hours ago" etc...
- “As a User, Given the comment was posted more than 1 day  ago, When the comment is displayed in the list, Then I want to see how many days have elapsed, for example “4 days ago” or "6 days ago"

### Requirements
You should have: 
- Nodejs
- NPM

### Comments DB
The folder fakeservice contains a small application that represent s your backend.
    Cd fakeservice
    Npm install
    dpd comments/app.dpd
    
#### Edit Database Model
    Open http://localhost:2403/dashboard/comments/properties/
    
#### Edit Data
    Open http://localhost:2403/dashboard/comments/data/

### Install Dependencies
    cd fakeservice
    npm install

##Summary
###fakeservice

- Added new property ‘timestamp’ under the fakeservice\comments\resources\comments\config.json
    
	"timestamp": {
	"name": "timestamp",
	"type": "number",
	"typeLabel": "number",
	"required": false,
	"id": "timestamp",
	"order": 2
}

- Storing ‘timestamp’ in DB against each post request using the javascript in fakeservice\comments\resources\comments\post.js directly, Instead of sending it in post request from UI.
    
	this.timestamp = new Date().getTime();

###Using moment.js library for time difference for all 3 apps

###Angular
- Created filter for formatting of posted time of comment where I have applied all the logic based on the requirement – angular/app/scripts/filter/ftTime.js
    
	{{comment.timestamp | formatTime}}
	
- 

Now choose the folder by framework's name and just follow the corresponding README file instructions located in each folder.


### Running App
Now choose the folder by framework's name and just follow the corresponding README file instructions located in each folder.
