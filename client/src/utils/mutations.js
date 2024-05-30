import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email:String!, $password: String!) {
    login(email:$email, password: $password) {
      _id
      username
      email
      savedBooks {
      title
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook( $description: String,
    $bookId: String!,
    $image: String,
    $link: String,
    $authors: [String],
    $title: String!) {
    addBook( description: $description,
      bookId: $bookId,
      image: $image,
      link: $link,
      authors: $author,
      title: $title) {
      _id
      username
      email
      savedBooks {
        _id
        bookId
        description
        image
        link
        authors
        title
      }
      }
    }
  }
`;