const { Router } = require('express')
const { mostPlayed } = require('../services/mostPlayed')

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const data = await mostPlayed()
    res.send(data)
  } catch (err) {
    next(err)
  }
})

module.exports = router
