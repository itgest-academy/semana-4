const db = require('./db')
const server = require('./server')
const middlewares = require('./middlewares')
const routes = require('./routes')

db.start(() => {
  server.bootstrap((appServer) => {
    middlewares.register(appServer)
    routes.register(appServer)
  })
})
