const { Client } = require('elasticsearch')
const client = new Client({
  host: process.env.ELASTIC_HOST || 'localhost:9200',
  log: 'trace'
})

async function setup () {
  return client
}

module.exports = {
  setup
}
