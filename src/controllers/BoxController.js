const Box = require('../models/Box')

class BoxController {
  async create(req, res){
   const result = await Box.create(req.body)

   return res.status(201).json(result)
  }
  async fetch(req, res){
    const result = await Box.findById(req.params.id).populate({
      path: "files",
      options: { sort: { createdAt: -1 } }
    })

    return res.json(result)
  }
}

module.exports = new BoxController()