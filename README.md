# Uphold Backend Engineer Assessment - David McKinney

## How to run

$ npm run dev

This will startup the server with nodemon running to automatically pick up and reload any changes to the code. 

The application can be accessed via: 

http://localhost:3000/uphold-bot/:currencyPair

Optionally a price oscillation percentage and a fetch interval in seconds can be supplied.
Otherwise the bot will use the default values of 0.01% and 5 seconds.

For example:
http://localhost:3000/uphold-bot/:currencyPair/:percentage/:interval

http://localhost:3000/uphold-bot/USD-BTC/0.05/60

## Docker

To run as a docker container:

$ docker-compose up