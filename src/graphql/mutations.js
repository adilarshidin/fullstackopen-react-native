import { gql } from "@apollo/client";

const AUTHENTICATE = gql`
  mutation ($username: String!, $password: String!){
    authenticate (credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

const SIGN_UP = gql`
  mutation ($username: String!, $password: String!) {
    createUser (user: { username: $username, password: $password }) {
      id
      username
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

const DELETE_REVIEW = gql`
  mutation ($deleteReviewId: ID!) {
    deleteReview (id: $deleteReviewId)
  }
`;

export { AUTHENTICATE, SIGN_UP, ADD_REVIEW, DELETE_REVIEW };
