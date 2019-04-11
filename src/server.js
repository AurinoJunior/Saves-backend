// Imports
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors()) 

const server = require('http').Server(app)
const io = require('socket.io')(server)

const port = process.env.PORT || 3000

// Abrindo conexão com websocket
io.on('connection', socket => {
  socket.on('connectRoom', box => {
    socket.join(box)
  })
})

mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@week6-yvzv5.mongodb.net/omnistack?retryWrites=true`,
  {
  useNewUrlParser: true
  }
)

// Esse middleware permite comunicação ws e http
app.use((req,res, next)=>{
  req.io = io;

  return next();
})

// Aqui podemos utiliza esse middleware para transitar json e faz com que servidor entenda o body
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes')) // Middleware de import do arquivo de rotas

server.listen(port, ()=>{
  console.log(`O servidor esta rodando na porta ${port}`)
})