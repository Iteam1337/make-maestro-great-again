const { Router } = require('express')
const { log } = require('../services/logger')

const router = Router()
router.post('/', async ({ body }, res, next) => {
  try {
    await log(body)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

module.exports = router
