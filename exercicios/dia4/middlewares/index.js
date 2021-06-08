const bodyParser = require('body-parser')

const sqlInjectionProtection = require('./sql_injection')
const xssProtection = require('./xss')

const middlewares = [
  sqlInjectionProtection,
  xssProtection,
  bodyParser.json(),
]

module.exports = {
  register(app) {
    for (const middleware of middlewares) {
      app.use(middleware)
    }
  }
}
