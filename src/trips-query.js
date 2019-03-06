const request = require('request')
const requestHeaders = require('./request-headers')

module.exports = function tripsQuery (from, to) {
  return function (token, cb) {
    const tripsQueryData = {
      'documentLanguage': 'DE',
      'originType': 'STATION',
      'originUicOrId': from,
      'destinationType': 'STATION',
      'destinationUicOrId': to,
      'stopBehaviour': 'ORIGIN_DESTINATION_ONLY',
      'products': [
        'ICE_EN_CNL_CIS_ES_MET_NZ_PEN_TGV_THA_X2',
        'EUROCITY_INTERCITY_ICN_INTERCITYNIGHT_SUPERCITY',
        'INTERREGIO',
        'FASTTRAIN_REGIOEXPRESS',
        'URBANRAILWAY_STADTEXPRESS_SEMIFASTTRAIN_OMNIBUSTRAIN',
        'METRO_MOTORAILTRAIN_SPECIALTRAIN_URLAUBSEXPRESS',
        'BUS_COACH_TAXI',
        'SHIP_FERRY_STEAMER',
        'CABLEWAY_FUNICULAR_GONDOLALIFT_CHAIRLIFT',
        'TRAMWAY'
      ]
    }

    request.post(
      process.env.JOURNEY_LOCATIONS_TRIPS,
      {
        json: tripsQueryData,
        headers: requestHeaders(token)
      },
      (err, res) => {
        if (err) return cb(err)

        cb(null, res.body)
      }
    )
  }
}
