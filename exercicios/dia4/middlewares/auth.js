const db = require('../db')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authorization = req.header('Authorization')

  const secret = 'B18fbWIyeU1utFA31mzGaVyzjyL9ZnfP'

  const { id } = jwt.verify(authorization, secret)

  db.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
    if (error) {
      throw error
    }

    if (results.length === 0) {
      res.status(401).send('You don\'t have enough privilegies to access this resource')
    } else {
      next()
    }
  })
}
