import { Currency } from "../models/Currency.js"

export const typeDefs = `#graphql
  type Currency {
    id: ID!
    name: String!
    code: String!
    rate: Float!
  }
  type Query {
    currencies: [Currency]
  }`
