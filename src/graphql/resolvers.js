import { Currency } from "../models/Currency.js"
import { addCurrencyDB } from "../config/db.js"

export const resolvers = {
    Query: {
      currencies() {
        return Currency.findAll()
      }
    },
    Mutation: {
        addCurrency: async (_, { currency }) => {
            const plainCurrency = { ...currency };

            const newCurrency = await addCurrencyDB(plainCurrency);
            return newCurrency;
          }
        }
  }
