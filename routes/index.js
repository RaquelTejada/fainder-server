
const { isAuthenticated } = require('../middleware/jwt.middleware')

module.exports = app => {

  const authRoutes = require('./auth.routes')
  app.use('/api/auth', authRoutes)

  const aiRoutes = require('./ai.routes')
  app.use('/api/ai', aiRoutes)

}