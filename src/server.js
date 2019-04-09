const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

mongoose.connect(
  'mongodb+srv://dev:dev123@week6-yvzv5.mongodb.net/omnistack?retryWrites=true',
  {
  useNewUrlParser: true
  }
)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'))

app.listen(port, ()=>{
  console.log(`O servidor esta rodando na porta ${port}`)
})