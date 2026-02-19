import { gql } from "@apollo/client";

const AUTHENTICATE = gql`
  mutation ($username: String!, $password: String!){
    authenticate (credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

const ADD_REVIEW = gql`
  mutation ($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
    createReview (review: {
      repositoryName: $repositoryName
      ownerName: $ownerName
      rating: $rating
      text: $text
    }) {
      createdAt
      id
      repositoryId
    }
  }
`;

export { AUTHENTICATE, ADD_REVIEW };
