const db = require('./db')
const server = require('./server')
const middlewares = require('./middlewares')
const routes = require('./routes')

db.start((_) => {
  server.bootstrap((app) => {
    middlewares.register(app)
    routes.register(app)
  })
})
