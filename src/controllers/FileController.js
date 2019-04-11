const Box = require('../models/Box')
const File = require('../models/File')

class FileController {
  async store(req, res){
    const box = await Box.findById(req.params.id)

    // Mandando para o banco o caminho e o nome do arquivo upado
    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key,
    })

    // Armazena o arquivo dentro da box especificada 
    box.files.push(file)

    await box.save()

    // Atualiza esse arquivo na minha box atual
    req.io.sockets.in(box._id).emit("file", file)

    res.json(file)
  }
}

module.exports = new FileController()