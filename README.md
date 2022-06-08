# RiskTier

## client
Contains the front end written using next.js
To launch run ```yarn start``` in /client/riskfe, it will launch on port 3000

## Design 
For the design I choose an input form with a grid to render side by side, since its crucial to reference your input data when seeing the output.
To avoid data entry errors we fetch categorical data from our backend server on startup and use it to populate dropdown fields. This allows only valid categorical inputs thats can be easily extended when data is added to the model. For the years of experience input we must do server side validation and return an error which will trigger a front end alert. 

<img width="836" alt="Empty" src="https://user-images.githubusercontent.com/28615603/172694844-e43ea92f-24bc-41dd-bc76-4fbc30e1f32f.png">

<img width="803" alt="ValidResult" src="https://user-images.githubusercontent.com/28615603/172694787-e6577a12-fa8f-436e-8ed3-a8695924fdc5.png">

<img width="896" alt="Alert" src="https://user-images.githubusercontent.com/28615603/172694876-10389019-41f0-49ca-8571-743c85b8ad0a.png">

## future work
Add front end testing
Improve next api interaction with risk service
Refactor into smaller components

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



