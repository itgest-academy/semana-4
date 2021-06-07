const express = require('express')
const bodyParser = require('body-parser')

const { validate } = require('indicative/validator')

const PORT = 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
  const data = req.body

  const rules = {
    name: 'required',
  }

  validate(data, rules)
    .then((value) => {
    }).catch((error) => { })

  res.send('Welcome')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
