require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Połączono z PostgreSQL');
  } catch (err) {
    console.error('Błąd połączenia', err);
  }
};

module.exports = { client, connectDB };
