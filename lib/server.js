const app = require('./app')

const server = app.listen(process.env.PORT || 3001, () => {
  const port = server.address().port
  console.log(`New Maestro is listening on port ${port}`)
})
