const express = require('express')
const cors = require('cors')
const logger = require('./routes/logger')
const mostPlayed = require('./routes/mostPlayed')
const blame = require('./routes/blame')
const toplist = require('./routes/toplist')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/log', logger)
app.use('/mostplayed', mostPlayed)
app.use('/toplist', toplist)
app.use('/blame', blame)

module.exports = app
