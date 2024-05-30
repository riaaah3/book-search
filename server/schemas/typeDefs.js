const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email:String!
    savedBooks:[Book]
  }

  type Book {
    _id: ID!
    description: String
    bookId: String!
    image: String
    link: String
    authors: [String]
    title:String!
  }

  type Auth{
    token:ID!
    user:User
  }

 

  type Query {
    me: Auth
  
  }


  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(
      description: String,
      bookId: String!,
      image: String,
      link: String,
      authors: [String],
      title: String!
    ):User
    removeBook(bookId: String!):User
  }
`;


module.exports = typeDefs;


// input BooKInput{
//   description: String
//   bookId: String!
//   image: String
//   link: String
//   authors: [String]
//   title: String!
// }