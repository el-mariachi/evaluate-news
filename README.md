# Project: Evaluate a News Article with Natural Language Processing
## Udacity Front End Web Developer Nanodegree

Project consists of browser code and server code. 
The front end part resembles a form that accepts plain text or an article URL as input.
The server part makes API calls to MeaningCloud Sentimemt Analysis endpoint and returns the result to the front end.
It also stores the private API key that is needed to access the online service.

### Instructions

- ```npm install```
- ```npm run build```
- ```npm start``` to start the server
- go to ```localhost:8081```

Sevice worker is added according to project instructions, but since the MeaningCloud API calls are made from the back end, when the latter fails, the app is of no use )).