# RiskTier

## client
Contains the front end written using next.js
To launch run ```yarn start``` in /client/riskfe, it will launch on port 3000

## Design 
For the design I choose an input form with a grid to render side by side, since its crucial to reference your input data when seeing the output.
To avoid data entry errors we fetch categorical data from our backend server on startup and use it to populate dropdown fields. This allows only valid categorical inputs thats can be easily extended when data is added to the model. For the years of experience input we must do server side validation and return an error which will trigger a front end alert. 

On success an alert will appear with a link to the underwriting page
<img width="888" alt="Screen Shot 2022-06-08 at 1 05 53 PM" src="https://user-images.githubusercontent.com/28615603/172707705-f8131d34-1d30-4f27-9fa5-4fe723c5f74b.png">

<img width="534" alt="Screen Shot 2022-06-08 at 1 06 24 PM" src="https://user-images.githubusercontent.com/28615603/172707718-0f1457e7-28d2-41aa-8d65-a42df6db1122.png">

On error and refferal alert messages also appear
<img width="831" alt="Screen Shot 2022-06-08 at 1 06 47 PM" src="https://user-images.githubusercontent.com/28615603/172707769-9ab04c8a-970a-460c-8d00-89fdcc451c13.png">

<img width="801" alt="Screen Shot 2022-06-08 at 1 07 16 PM" src="https://user-images.githubusercontent.com/28615603/172707788-c6abd050-a047-49e8-9fc3-c8b603416297.png">


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



