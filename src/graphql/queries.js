import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          forksCount
          fullName
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;

const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository (id: $id) {
      id
      fullName
      url
      forksCount
      description
      createdAt
      language
      name
      openIssuesCount
      ownerAvatarUrl
      ownerName
      ratingAverage
      reviewCount
      stargazersCount
      watchersCount
    }
  }
`

const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;

export { GET_REPOSITORIES, GET_REPOSITORY, ME };
