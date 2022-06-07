# RiskTier

## client [WIP]
Contains the front end written using next.js

## data
Has the reference model csv for testing

## server
Contains an express server with a prisma database to serve the risk models.
The model data was loaded into a sqlite database for easy extensibility. 
The risk.ts file contains the risk model as well as the hueristic definitions. 

### future work
Expand testing.
Expand apis to enable bulk data import to the database.
Expand hueristics to be creatable/editable through api.



