const express = require('express')
const bodyParser = require('body-parser')

const router = require('./router')
const middlewares = require('./middlewares')

const app = express()

app.use(bodyParser.json())

app.use('/users', middlewares.sqlInjection)
app.use('/users', middlewares.xssProtection)

app.use(router.public)

const EXPRESS_PORT = 3000

module.exports = {
  bootstrap() {
    app.listen(EXPRESS_PORT, () => {
      console.log(`Listening on port ${EXPRESS_PORT}`);
    })
  }
}
