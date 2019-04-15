# Saves-backend
Projeto semelhante a um dropbox, google drive, com nodejs em real-time (Parte do backend) 

### Installing
* nodejs
* npm ou yarn

### Getting Started

* Install the dependencies with npm -i or yarn install
* Run de command in the terminal **yarn start** for prod enviroment or **yarn dev** for dev enviroment
* Access the url http://localhost:3000

### Resources

#### Create new Box [/boxes POST]

* Status code 201 Created

Request

```
curl -v -X POST -H 'Content-type: application/json' -d '{"title":"aurino"}' "https://saves-backend.herokuapp.com/boxes"
```

Response
```
{
  "files": [],
  "_id": "5cb4c3e6c6077300173ed990",
  "title": "aurino",
  "createdAt": "2019-04-15T17:48:22.917Z",
  "updatedAt": "2019-04-15T17:48:22.917Z",
   "__v": 0
}
```

#### Fetch one box [/boxes/:id GET]

* Status code 200 OK

Request
```
curl -v "https://saves-backend.herokuapp.com/boxes/5cb4c5adc6077300173ed994"
```

Response
```
{
  "files": [],
  "_id": "5cb4c5adc6077300173ed994",
  "title": "aurino",
  "createdAt": "2019-04-15T17:55:57.208Z",
  "updatedAt": "2019-04-15T17:55:57.208Z",
  "__v": 0
}

```

#### Create new File [/boxes/:id/files POST]

* Status code 201 Created

Request
```
curl -v -X POST -H "Content-Type: multipart/form-data" -F "file=@/home/arquivo.jpg" "https://saves-backend.herokuapp.com/boxes/5cb4c5adc6077300173ed994/files" | jq
```

Response
```
{
  "_id": "5cb4c7e9c6077300173ed995",
  "title": "fortnite-t8.jpg",
  "path": "e458e27cb3686a12dc772a7300fe5dba-fortnite-t8.jpg",
  "createdAt": "2019-04-15T18:05:29.339Z",
  "updatedAt": "2019-04-15T18:05:29.339Z",
  "__v": 0,
  "url": "https://saves-backend.herokuapp.com/files/e458e27cb3686a12dc772a7300fe5dba-fortnite-t8.jpg",
  "id": "5cb4c7e9c6077300173ed995"
}
```

### Uteis
* API in production on [heroku](https://saves-backend.herokuapp.com/)
* Frontend repository https://github.com/AurinoJunior/Saves-frontend
* Application in production on https://saves-frontend.herokuapp.com/
