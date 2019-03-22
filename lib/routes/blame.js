const { Router } = require('express')
const { blame } = require('../services/blame')

const router = Router()

router.post('/', async ({ body }, res, next) => {
  try {
    const data = await blame(body)
    res.send(data)
  } catch (err) {
    next(err)
  }
})

module.exports = router
