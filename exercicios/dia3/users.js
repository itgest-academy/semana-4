const express = require('express')
const bodyParser = require('body-parser')

const { validate, validations } = require('indicative/validator')

const PORT = 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
  const data = req.body

  const rules = {
    name: 'required',
    email: 'required|email',
    username: 'required|alphaNumeric',
    phone: [
      validations.required,
      validations.regex(['^((\\+|00)\\d{1,3}\\s{1})?\\d{9}$']),
    ],
  }

  validate(data, rules)
    .then((value) => {
      res.send(value)
    }).catch((error) => {
      res.status(400).send(error)
    })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
