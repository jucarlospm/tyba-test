## Tyba Test  By Juan Carlos Peña Merlano

## Como correr el proyecto?
Este proyecto usa docker con docker-compose. Entonces solamente se debe correr el siguiente comando:

`docker-compose up -d`

Y probar los endpoint localmente con el siguiente puerto

`http://localhost:3000`

## Enviroments
Estas son las variables de entorno que se puede usar pobrar el proyecto. Porfa cuidar el Api Key <3

````
NODE_ENV = 'dev'
TOKEN_KEY = 'tokenPasswordVerySecret*'

HOST = 0.0.0.0
PORT = 3000

## DynamoDB Connection
DYNAMODB_AWS_REGION = 'us-east-1'
DYNAMODB_AWS_API_KEY = 'test'
DYNAMODB_AWS_SECRET = 'test'
DYNAMODB_LOCAL_ENDPOINT = 'http://dynamodb-local:8000'

## Tables
LOGS_TABLE = 'logs_tyba'
USERS_TABLE = 'users_tyba'
AUTH_TABLE = 'auth_tyba'

## Maps
MAPS_API_KEY = 'AIzaSyAi6zKiUJHSyToHOaCBjt_SxhBn2-Luhuo'
MAPS_PLACE_ENDPOINT = 'https://maps.googleapis.com/maps/api/place/textsearch/json'

````
## Endpoints
````
POST /api/register

Body
{
    "email": "jucarlospm211@gmail.com",
    "firstName": "Juan Carlos",
    "lastName": "Peña Merlano",
    "password": "1234"
}
````

````
POST /api/login

Body
{
    "email": "jucarlospm211@gmail.com",
    "password": "1234"
}
````

````
POST /api/logout

Header
x-access-token
````

````
GET /api/restaurants

Header
x-access-token

Body
{
    "city": "cartagena"
}
````

````
GET /api/logs
````

## Como correr test
Para correr los test ir al folder de  `api` y correr `npm run test`