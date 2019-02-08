const { setup } = require('../adapters/elastic')
const moment = require('moment')

async function log({ sender, command, args }) {
  const elastic = await setup()
  await elastic.index({
    index: 'commands',
    type: 'command',
    body: {
      timestamp: moment().utc().toISOString(),
      sender,
      command,
      args
    }
  })
}

module.exports = {
  log
}
