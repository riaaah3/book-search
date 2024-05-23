const User = `
  type User {
    _id: ID!
    username: String!
    email:String!
    savedBooks:[Book]
  }

  type Book {
    _id: ID!
    description: String!
    bookId: String!
    image: String!
    link: title
    authors: [String]
  }

  type Auth{
    token:ID!
    user:User
  }

  type Query {
    me: Auth
  
  }

  input BooKType{
    description: String!
    bookId: String!
    image: String!
    link: title
    authors: [String]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookType:BookType):User
    removeBook(bookId: String!):User
  }
`;


module.exports = typeDefs;
