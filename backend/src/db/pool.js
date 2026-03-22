const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://kulmi:kulmi@localhost:5432/kulmi",
});

module.exports = pool;
