import { ApolloServer } from "apollo-server-lambda";

import { schema } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

exports.graphqlHandler = server.createHandler();
