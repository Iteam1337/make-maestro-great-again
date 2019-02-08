const express = require('express')
const cors = require('cors')

const logger = require('./routes/logger')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/log', logger)

module.exports = app
