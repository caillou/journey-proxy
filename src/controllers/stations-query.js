const request = require('request')
const requestHeaders = require('../helpers/request-headers')

module.exports = function stationsQuery (req, res, next) {
  const stationQueryData = {
    'documentLanguage': 'DE',
    'limit': 10,
    'nameMatchOrRefinableLink': req.params.query,
    'type': 'ALL'
  }

  request.post(
    process.env.JOURNEY_LOCATIONS_URL,
    {
      json: stationQueryData,
      headers: requestHeaders(req.journeyToken)
    },
    (err, response) => {
      if (err) return next(err)
      res.json({
        locations: response.body.locations
      })
    }
  )
}
