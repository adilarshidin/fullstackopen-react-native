import { gql } from "@apollo/client";

const AUTHENTICATE = gql`
  mutation ($username: String!, $password: String!){
    authenticate (credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export { AUTHENTICATE };
