const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: String
    authors: String
    description: String
    image: String
    link: String!
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(userId: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: String!): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
