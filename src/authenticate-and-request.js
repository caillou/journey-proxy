const waterfall = require('async/waterfall')
const getToken = require('./get-token')

module.exports = function authenticateAndRequest (controller) {
  return (req, res, next) => {
    waterfall([
      getToken,
      req.params.query ? controller(req.params.query) : controller(req.params.from, req.params.to)
    ], (err, locations) => {
      if (err) {
        next(err)
        return
      }
      res.json({ locations })
    })
  }
}
