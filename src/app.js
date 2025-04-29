import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs} from './graphql/schema.js'
import { connectDB } from './config/db.js'
import { resolvers } from './graphql/resolvers.js'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

connectDB();

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})


