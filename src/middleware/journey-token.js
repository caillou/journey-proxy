const request = require('request')

module.exports = function journeyToken (req, res, next) {
  getToken((err, token) => {
    if (err) return next(err)
    req.journeyToken = token
    next()
  })
}

const getTokenData = {
  client_secret: process.env.JOURNEY_TOKEN_CLIENT_SECRET,
  client_id: process.env.JOURNEY_TOKEN_CLIENT_ID,
  grant_type: 'client_credentials'
}

function getToken (cb) {
  request.post(
    process.env.JOURNEY_TOKEN_URL,
    {
      json: true,
      form: getTokenData
    },
    (err, res) => {
      if (err) return cb(err)

      cb(null, res.body.access_token)
    }
  )
}
