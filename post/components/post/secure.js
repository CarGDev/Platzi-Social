const auth = require('../../../auth')

module.exports = function checkAuth (action) {
  function middleware (req, res, next) {
    switch (action) {
      case 'owner':
        // const owner = req.body.id
        auth.check.own(req, req.body.user)
        next()
        break
      case 'logged':
        // const owner = req.body.id
        auth.check.logged(req)
        next()
        break
      default:
        next()
    }
  }

  return middleware
}
