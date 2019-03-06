const request = require('request')
const requestHeaders = require('./request-headers')

module.exports = function stationsQuery (query) {
  return function (token, cb) {
    const stationQueryData = {
      'documentLanguage': 'DE',
      'limit': 10,
      'nameMatchOrRefinableLink': query,
      'type': 'ALL'
    }

    request.post(
      process.env.JOURNEY_LOCATIONS_URL,
      {
        json: stationQueryData,
        headers: requestHeaders(token)
      },
      (err, res) => {
        if (err) return cb(err)
        cb(null, res.body.locations)
      }
    )
  }
}
