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
  }
  type Mutation {
    addCurrency(currency: AddCurrencyInput!): Currency
    deleteCurrency(id: ID!): Currency
  }
  input AddCurrencyInput {
    name: String!,
    code: String!,
    rate: Float!
  }`
