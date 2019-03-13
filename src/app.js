const app = require('express')()

app.get('*', function (req, res) {
  res.json(req.originalUrl)
})

// app.use(require('./middleware/journey-token'))
// app.use(require('cors')())
//
// app.get(
//   '/station-search/:query',
//   require('./controllers/stations-query')
// )
//
// app.get(
//   '/from/:from/to/:to',
//   require('./controllers/trips-query')
// )

module.exports = app
