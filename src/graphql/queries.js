import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String
  ) {
    repositories (
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword
    ) {
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
      reviews {
        edges {
          node {
            createdAt
            id
            rating
            repositoryId
            text
            user {
              username
            }
          }
        }
      }
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
