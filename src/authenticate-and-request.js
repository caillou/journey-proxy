const waterfall = require('async/waterfall')
const getToken = require('./get-token')

module.exports = function authenticateAndRequest (controller) {
  return (req, res, next) => {
    waterfall([
      getToken,
      controller(req.params)
    ], (err, locations) => {
      if (err) {
        next(err)
        return
      }
      res.json({ locations })
    })
  }
}
