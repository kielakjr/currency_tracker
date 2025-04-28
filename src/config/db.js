require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  dialect: 'postgres',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected with PostgreSQL');

    await sequelize.sync({ alter: true });
    console.log('Models\'s synchronization is finished');

  } catch (err) {
    console.error('Connection error', err);
  }
};

module.exports = { sequelize, connectDB };
