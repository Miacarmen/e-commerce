const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    # Get ALL users
    users: [User]
    # Get ONE user
    user(username: String!): User
    # Get current logged in user based on JWT
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    # Login with email and password
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;