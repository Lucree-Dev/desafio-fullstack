An example Dockerfile for a Java webapp + a few dependencies:

 * Python 3.9
 * Flask
 * MongoDB
 
Prerequisites
-----

I assume you have installed Docker and it is running.

See the [Docker website](http://www.docker.io/gettingstarted/#h_installation) for installation instructions.

Build
-----

Steps to build a Docker image:

1. Clone this repo

        git clone https://github.com/rafaelluciodeveloper/desafio-fullstack

2. Enter the desafio-fullstack folder

        cd desafio-fullstack
        
3. Build the image

        docker-composer build

    This will take a few minutes.

4. Run the image's default command, which should start everything up. 

        docker-composer up -d

5. Once everything has started up, you should be able to access the webapp via [http://localhost:5000/](http://localhost:8000/) to access the back-end and [http://localhost:3000/](http://localhost:3000/) to access the fron-end on your host machine.

        open http://localhost:8000/
        open http://localhost:3000/

Usage (Back-End)
-----

### POST `/account/person`
Esse método deve receber um novo usuário e inseri-lo em um banco de dados para ser consumido pela própria API.
```json
{
   "first_name":"João",
   "last_name": "das Neves",
   "birthday": "1991-09-91",
   "password": "*****",
   "username": "joao_das_neves",
   "user_id": "70c881d4a26984ddce795f6f71817c9cf4480e79"
}
```
### GET `/account/friends`
Esse método da API deve retornar o seguinte JSON com os amigos do usuário
```json
[
  {
   "first_name":"João",
   "last_name": "das Neves",
   "birthday": "1991-09-91",
   "username": "joao_das_neves",
   "user_id": "70c881d4a26984ddce795f6f71817c9cf4480e79"
  },
  {
   "first_name":"João",
   "last_name": "das Neves",
   "birthday": "1991-09-91",
   "username": "joao_das_neves",
   "user_id": "70c881d4a26984ddce795f6f71817c9cf4480e79"
  },
  {
   "first_name":"João",
   "last_name": "das Neves",
   "birthday": "1991-09-91",
   "username": "joao_das_neves",
   "user_id": "70c881d4a26984ddce795f6f71817c9cf4480e79"
  }
]
```
### POST `/account/card`
Esse método deve receber um cartão novo e inseri-lo em um banco de dados para ser consumido pela própria API.
```json
{
   "card_id": "70c881d4a26984ddce795f6f71817c9cf4480e79"
   "title": "Cartão 1",
   "pan": "5527952393064634",
   "expiry_mm": "03",
   "expiry_yyyy": "2022",
   "security_code": "656",
   "date":"26/11/2015"
}
```
### GET `/account/cards`
Esse método da API deve retornar o seguinte JSON com os cartões cadastrados pelo usuário
```json
[
  {
    "title":"Cartão 1",
    "pan": "5527952393064634",
    "expiry_mm": "03",
    "expiry_yyyy": "2022",
    "security_code": "656",
    "date":"26/11/2015"
  },
  {
     "title":"Cartão 2",
     "pan": "5527952393064634",
     "expiry_mm": "03",
     "expiry_yyyy": "2022",
     "security_code": "656",
     "date":"26/11/2015"
  },
  {
     "title":"Cartão 2",
     "pan": "5527952393064634",
     "expiry_mm": "03",
     "expiry_yyyy": "2022",
     "security_code": "656",
     "date":"26/11/2015"
  }
]
```
### POST `/account/transfer`
Esse método irá receber os dados da compra, junto com os dados do usuário.
```json
{
   "friend_id": "70c881d4a26984ddce795f6f71817c9cf4480e79",
   "total_to_transfer": 100,
   "billing_card": {
      "card_id": "70c881d4a26984ddce795f6f71817c9cf4480e79"
   }
}

```
### GET `/account/bank-statement`
Esse método deve retornar todas as transferencias realizadas entre os amigos na API
```json
[
   {
      "user_id":"70c881d4a26984ddce795f6f71817c9cf4480e79",
      "friend_id":"70c881d4a26984ddce795f6f71817c9cf4480e79",
      "value":1234,
      "date":"19/08/2016",
      "from_card":"70c881d4a26984ddce795f6f71817c9cf4480e79"
   },
   {
      "user_id":"70c881d4a26984ddce795f6f71817c9cf4480e79",
      "friend_id":"70c881d4a26984ddce795f6f71817c9cf4480e79",
      "value":1234,
      "date":"19/08/2016",
      "from_card":"70c881d4a26984ddce795f6f71817c9cf4480e79"
   },
   {
      "user_id":"70c881d4a26984ddce795f6f71817c9cf4480e79",
      "friend_id":"70c881d4a26984ddce795f6f71817c9cf4480e79",
      "value":1234,
      "date":"19/08/2016",
      "from_card":"70c881d4a26984ddce795f6f71817c9cf4480e79"
   },
]
```
### GET `/account/bank-statement/{usertId}`
Esse método deve retornar todos as transferencias realizadas na API por um usuário específico
```json
[
   {
      "user_id":"70c881d4a26984ddce795f6f71817c9cf4480e79",
      "friend_id":"70c881d4a26984ddce795f6f71817c9cf4480e79",
      "value":1234,
      "date":"19/08/2016",
      "from_card":"70c881d4a26984ddce795f6f71817c9cf4480e79"
   },
   {
      "user_id":"70c881d4a26984ddce795f6f71817c9cf4480e79",
      "friend_id":"70c881d4a26984ddce795f6f71817c9cf4480e79",
      "value":1234,
      "date":"19/08/2016",
      "from_card":"70c881d4a26984ddce795f6f71817c9cf4480e79"
   },
]
```
Usage (Front-end)
-----
Access in your browser http: // localhost: 3000
