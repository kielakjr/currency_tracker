import { Currency } from "../models/Currency.js"
import { addCurrencyDB, deleteCurrencyDB } from "../config/db.js"

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
          },
        deleteCurrency: async (_, { id }) => {
            try {
              const currency = await deleteCurrencyDB(id);
              if (!currency) {
                throw new Error(`Currency not found id ${id}`);
              }
              return currency;
            } catch (err) {
              throw new Error("Failed to delete currency: " + err.message);
            }
          },
    }
}
