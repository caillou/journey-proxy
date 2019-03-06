const request = require('request')
const requestHeaders = require('./request-headers')

module.exports = function tripsQuery (from, to) {
  return function (token, cb) {
    const tripsQueryData = {
      'calculateEco': true,
      // 'dateTime': '2019-03-06T16:26:06.071Z',
      'destinationType': 'STATION',
      'destinationUicOrId': to,

      'documentLanguage': 'DE',

      'economic': true,
      'individualChangeTime': true,

      'originType': 'STATION',
      'originUicOrId': from,

      'products': [
        'ICE_EN_CNL_CIS_ES_MET_NZ_PEN_TGV_THA_X2',
        'EUROCITY_INTERCITY_ICN_INTERCITYNIGHT_SUPERCITY',
        'INTERREGIO',
        'FASTTRAIN_REGIOEXPRESS',
        'SHIP_FERRY_STEAMER',
        'URBANRAILWAY_STADTEXPRESS_SEMIFASTTRAIN_OMNIBUSTRAIN',
        'BUS_COACH_TAXI',
        'CABLEWAY_FUNICULAR_GONDOLALIFT_CHAIRLIFT',
        'METRO_MOTORAILTRAIN_SPECIALTRAIN_URLAUBSEXPRESS',
        'TRAMWAY'
      ],

      'searchForArrival': true,
      'stopBehaviour': 'ORIGIN_DESTINATION_ONLY', // REAL_BOARDING_ALIGHTING, ALL_BOARDING_ALIGHTING
      'unsharp': true

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
