const {gql}= require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!):Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input:savedBook!): User
    removeBook(bookId: ID!): User
}
type User{ 
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    _id: ID!
    bookId: String,
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
type Auth {
    token: ID!
    user: User
}
input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}
`;

module.exports = typeDefs;