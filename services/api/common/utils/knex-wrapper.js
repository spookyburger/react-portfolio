import knex from 'knex'

const env = process.env.NODE_ENV || 'dev'

const config = {
  dev: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  test: {
    client: 'pg',
    connection: process.env.DATABASE_TEST_URL
  }
}

export default knex(config[env])
