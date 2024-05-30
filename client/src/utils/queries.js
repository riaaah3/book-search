import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
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
`;
