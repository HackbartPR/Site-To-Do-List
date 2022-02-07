const path = require('path')
const express = require('express')
const app = express()
const router = require('./routes/api')
const PORT = 3000

app.use('/api', router)
app.use('/', express.static(path.join(__dirname, '/public')))

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`)
})
