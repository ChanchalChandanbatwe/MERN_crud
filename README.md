# MERN_crud

This is simple tutorial application for employee crud operation using MongoDB Express React Node.
In this application:
- Each employee has id, first name, last name, email.
- We can create, retrieve, update and delete employees.
- There is a search bar for finding employees by first name.

The server code resides in server folder
## Pre-Requirement
1. MongoDB 
  - Follow the steps from [mongoDB official site](https://docs.mongodb.com/manual/administration/install-community/) to install mongoDB
2. Node
  - Find node installation steps on [nodejs.org](https://nodejs.org/en/download/).
  - Open the terminal and trigger the command `npm install -g npx `.

## step 1
Open the cloned folder into vscode and go to server folder and install dependencies, If you want to change port number for server you can change it from `server/.env` file `(default port is 8080)`.

```
cd server
npm install
npm start
```
your node server should be running on [http://localhost:8080](http://localhost:8080).
Can check these API in postman

| Methods |	Urls |	Actions |
|---|---|---|
| POST |	/api/employees |	create new Employee |
| GET |	/api/employees |	retrieve all Employees |
| GET |	/api/employees/:id |	retrieve a Employee by :id |
| PUT |	/api/employees/:id |	update a Employee by :id |
| DELETE |	/api/employees/:id |	delete a Employee by :id |
| DELETE |	/api/employees |	delete all Employees |
| GET |	/api/employees?firstName=[keyword] |	find all Employees which first name contains keyword |


## step 2
Open another terminal, go one step down from `server/` folder and execute the following commands to make react application running.

```
cd ..
npm install
npm start
```

The application should run on [http://localhost:8081](http://localhost:8081), If you want to change the port number from 8081 to some other port number you can change it same as we did for server port number from `.env` file.:+1:
