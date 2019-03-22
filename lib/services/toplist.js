const { setup } = require('../adapters/elastic')

async function toplist() {
  const elastic = await setup()

  const query = {
    body: {
      size: 0,
      query: {
        bool: {
          must_not: [
            {
              match: {
                'sender.keyword': '',
              },
            },
          ],
        },
      },
      aggs: {
        toplist: {
          terms: {
            field: 'sender.keyword',
            order: {
              _count: 'desc',
            },
          },
        },
      },
    },
  }

  const { aggregations } = await elastic.search(query)

  return aggregations.toplist.buckets
}

module.exports = {
  toplist,
}
