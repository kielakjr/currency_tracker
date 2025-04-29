import 'dotenv/config';
import { Sequelize } from 'sequelize';
import { Currency } from '../models/Currency.js';

export const sequelize = new Sequelize({
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  dialect: 'postgres',
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected with PostgreSQL');

    await sequelize.sync({ alter: true });
    console.log('Models\'s synchronization is finished');

  } catch (err) {
    console.error('Connection error', err);
  }
};

export const addCurrencyDB = async (currencyData) => {
  try {
    const newCurrency = await Currency.create(currencyData);
    console.log('Added new currency', newCurrency.toJSON());
    return newCurrency;
  } catch (error) {
    console.error('Error with adding new currency:', error);
    throw error;
  }
};
