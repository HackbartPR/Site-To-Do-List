const cors = require('cors')
const posts = require('../models/posts')
const express = require('express')
const router = express.Router()
const corsOpt = {
  origin: 'http://localhost:3000'
}

router.use(cors(corsOpt))
router.use('/save', express.json())
router.use('/delete', express.json())

//ENVIAR
router.get('/find', (req, res) => {
  res.json(JSON.stringify(posts.getPost()))
})
//SALVAR
router.post('/save', (req, res) => {
  let date = req.body.date
  let desc = req.body.description
  posts.savePost(date, desc)
  res.send('Post guardado com sucesso!')
})

router.delete('/delete', (req, res) => {
  try {
    posts.removePost(req.body.id)
    res.send()
  } catch (error) {
    res.send()
  }
})

module.exports = router
