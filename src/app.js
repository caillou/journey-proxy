const app = require('express')()

app.use(require('./middleware/journey-token'))
app.use(require('cors')())

app.get(
  '/station-search/:query',
  require('./controllers/stations-query')
)

app.get(
  '/from/:from/to/:to',
  require('./controllers/trips-query')
)

app.get('/demo', function (req, res) {
  res.json({hello: 'retro'})
})


module.exports = app
