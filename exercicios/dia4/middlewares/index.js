const bodyParser = require('body-parser')

const sqlInjection = require('./sql_injection')
const xss = require('./xss')

const middlewares = [
  sqlInjection,
  xss,
  bodyParser.json(),
]

module.exports = {
  register(app) {
    for (const middleware of middlewares) {
      app.use(middleware)
    }
  }
}
