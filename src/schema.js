import { gql } from "apollo-server-lambda";

export const schema = gql`
  type Query {
    getUsers: [User!]!
    getUserByUsername(username: String!): User!
    getTodos: [Todo!]!
  }

  type Todo {
    id: Int!
    userId: Int!
    title: String!
    completed: Boolean!
  }

  type User {
    id: Int!
    name: String!
    username: String!
    email: String!
    todos: [Todo!]!
  }
`;
