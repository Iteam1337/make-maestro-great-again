const { Router } = require('express')
const { toplist } = require('../services/toplist')

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const data = await toplist()
    res.send(data)
  } catch (err) {
    next(err)
  }
})

module.exports = router
