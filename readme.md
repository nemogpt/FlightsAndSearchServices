<<<<<<< HEAD
=======
/
>>>>>>> 904ccfb3a4c672bda1129b3d324fc6c73d94bb3f
# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
<<<<<<< HEAD
- Create a `.env` file in the root directory and add teh following enviornment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following peice of json
=======
- Create a `.env` file in the root directory and add teh flowoing enviornment variable
    - `PORT=3000`
-Inside the `src/config` folder create a new file `config.json` and then add the following peice of json
>>>>>>> 904ccfb3a4c672bda1129b3d324fc6c73d94bb3f


```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

<<<<<<< HEAD
- Once you have added your db config as listed above, go to the src folder in your terminal and execute `npx sequelize db:create`
=======
-Once you have added your db config as listed above, go to the src folder in your terminal and execute `npx sequelize db:create`
>>>>>>> 904ccfb3a4c672bda1129b3d324fc6c73d94bb3f




Folder Structure

    -src/
        index.js //server
        models/
        controllers/
        services/
        utils/
        config/
        repository/
    -tests/ [later]
    -static/
    -temp/
//role based projects ->all models in one folder, all controllers in one.
feature based
-flights
    /models
    /controllers
-Search 
    /models
    /controllers