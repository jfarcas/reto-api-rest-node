# SquadMakers Reto NodeJS - Jokes and Math API
This API provides a set of endpoints for jokes and math calculations.
## ENDPOINTS
### Joke
This endpoint provides jokes from different sources.
 - saved in postgres database
 - from https://icanhazdadjoke.com/
 - from https://api.chucknorris.io

#### Get all jokes saved in DB
```bash
GET /jokes

#### Create a joke and save it to DB
```bash
POST /jokes
```
#### Get joke by number saved in DB
```bash
GET /jokes/{number}
```

#### Get a random joke
Returns a random joke from one of the following sources:
 - https://icanhazdadjoke.com/
 - https://api.chucknorris.io
```bash
GET /jokes/random
```

#### Get a joke by type
Returns a joke from one of the following sources, based on the parameter type:<br/>
If the parameter type is "dad" will return a joke from this source:
- https://icanhazdadjoke.com/ <br/>
If the parameter type is "chuck" will return a joke from this source:
- https://api.chucknorris.io <br/>
If the parameter type is not "chuck" or "dad" will return an error
```bash
GET /jokes/by-type/{type}
```
#### Update a joke
```bash
PUT /jokes/{number}
```

#### Delete a joke
```bash
DELETE /jokes/{number}
```

### Math
This endpoint provides two mathematical endpoint to calculate the least common multiple of a list of numbers 
and an increment endpoint that will return the incremented number passed by query parameters .

```bash
GET /math/least-common-multiple?numbers=12&numbers=2&numbers=34&numbers=45
```

```bash
GET /math/increment?number=12
```

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [Docker](https://docs.docker.com/engine/install/)
- Install [Docker-compose](https://docs.docker.com/compose/install/)

This api use postgresql from Docker and is ready for use without any additional configuration.
# Getting started
- Clone the repository
``` bash
git clone --depth=1 https://github.com/Microsoft/TypeScript-Node-Starter.git <project_name>
```
- Install dependencies
``` bash
cd <project-name>
npm install
```
- Build and run the project
``` bash
docker-compose build 
docker-compose up
```

This command will start the project
Finally, navigate to http://localhost:8888 and you should see the project being served and rendered locally!

## Testing

``` bash
npm run test 

```
