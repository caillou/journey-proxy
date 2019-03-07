const app = require('express')()

app.use(require('./middleware/journey-token'))

app.get(
  '/station-search/:query',
  require('./controllers/stations-query')
)

app.get(
  '/from/:from/to/:to',
  require('./controllers/trips-query')
)

module.exports = app
