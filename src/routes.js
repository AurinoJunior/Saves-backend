const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router()

const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')

routes.post('/boxes', BoxController.create)
routes.get('/boxes/:id', BoxController.fetch)

// O arquivo passado no formato de urlencoded é referenciado pela chave file.
routes.post('/boxes/:id/files', multer(multerConfig).single('file') ,FileController.store)

module.exports = routes