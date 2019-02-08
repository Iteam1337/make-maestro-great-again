const { Client } = require('elasticsearch')
const client = new Client({
  host: process.env.ELASTIC_HOST || 'localhost:9200',
  log: process.env.ELASTIC_LOG_LEVEL || 'trace'
})

async function setup () {
  return client
}

module.exports = {
  setup
}
