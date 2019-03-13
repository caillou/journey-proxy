const request = require('request')
const requestHeaders = require('../helpers/request-headers')

module.exports = function tripsQuery (req, res, next) {
  const tripsQueryData = {
    'documentLanguage': 'DE',
    'originType': 'STATION',
    'originUicOrId': req.params.from,
    'destinationType': 'STATION',
    'destinationUicOrId': req.params.to,
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
      headers: requestHeaders(req.journeyToken)
    },
    (err, response) => {
      if (err) return next(err)

      try {
        return res.json({
          trips: response.body.trips.map(getSimplifiedTrip)
        })
      } catch (e) {

      }

      return res.json({ trips: [] })
    }
  )
}

function getSimplifiedTrip (trip) {
  const firstStop = trip.legs[0].stops[0]
  const lastLeg = trip.legs[trip.legs.length - 1]
  const lastStop = lastLeg.stops[lastLeg.stops.length - 1]

  const from = {
    name: firstStop.name,
    time: firstStop.departureDateTime,
    track: firstStop.departureTrack
  }
  const to = {
    name: lastStop.name,
    time: lastStop.arrivalDateTime,
    track: lastStop.arrivalTrack
  }
  return {
    from: from,
    to: to
  }
}
