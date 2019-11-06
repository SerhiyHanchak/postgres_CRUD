module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "serjDev",
      database: "postgres_db"
    },
    migrations: {
      directory: './dist/migrations'
    },
    seeds: {
      directory: './dist/seeds'
    }
  }
};
