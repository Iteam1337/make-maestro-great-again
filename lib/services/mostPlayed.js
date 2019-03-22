const { setup } = require('../adapters/elastic')

async function mostPlayed() {
  const elastic = await setup()

  const query = {
    body: {
      size: 0,
      query: {
        bool: {
          should: [
            {
              match: {
                'command.keyword': 'queue',
              },
            },
            {
              match: {
                'command.keyword': 'spotify-copy',
              },
            },
          ],
        },
      },
      aggs: {
        most_played: {
          terms: {
            field: 'args.keyword',
            order: {
              _count: 'desc',
            },
          },
        },
      },
    },
  }

  const { aggregations } = await elastic.search(query)

  return aggregations.most_played.buckets
}

module.exports = {
  mostPlayed,
}
