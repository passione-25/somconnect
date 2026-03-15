const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://somconnect:somconnect@localhost:5432/somconnect",
});

module.exports = pool;
