const { Pool } = require('pg');
require('dotenv').config();

// Create a new Pool object from the pg module to manage database connections
const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

module.exports = pool;