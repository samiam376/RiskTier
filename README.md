# RiskTier

## client [WIP]
Contains the front end written using next.js

## data
Has the reference model csv for testing

## server
Contains an express server with a prisma database to serve the risk models.
The model data was loaded into a sqlite database for easy extensibility. 
The ```risk.ts``` file contains the risk model as well as the hueristic definitions.
The  ```controller.ts``` file contains the api route implementations.
The ```server.ts``` file contains the express server. 

To launch the backend server run ```yarn start```, it will default to port 3001

### future work
Expand testing.
Expand apis to enable bulk data import to the database.
Expand hueristics to be creatable/editable through api.



