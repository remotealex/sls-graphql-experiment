const { gql } = require("apollo-server-lambda");

export const schema = gql`
  type Query {
    getUser(username: String!): User!
  }

  type User {
    name: String!
    username: String!
    email: String!
  }
`;
