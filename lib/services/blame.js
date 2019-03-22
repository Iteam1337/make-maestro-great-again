const { setup } = require('../adapters/elastic')

async function blame({ uri }) {
  const elastic = await setup()

  const query = {
    body: {
      sort: [
        {
          timestamp: {
            order: 'desc',
          },
        },
      ],
      query: {
        match: {
          'args.keyword': uri,
        },
      },
    },
  }

  const { hits } = await elastic.search(query)

  return hits.hits.map(hit => hit._source)
}

module.exports = {
  blame,
}
