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
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
