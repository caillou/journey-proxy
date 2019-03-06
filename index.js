const express = require('express')

const tripsQuery = require('./src/trips-query')
const stationsQuery = require('./src/stations-query')
const authenticateAndRequest = require('./src/authenticate-and-request')

const app = express()

app.get(
  '/station-search/:query',
  authenticateAndRequest(stationsQuery)
)

app.get(
  '/from/:from/to/:to',
  authenticateAndRequest(tripsQuery)
)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
