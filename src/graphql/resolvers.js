import { Currency } from "../models/Currency.js"

export const resolvers = {
    Query: {
      currencies() {
        return Currency.findAll()
      }
    }
  }
