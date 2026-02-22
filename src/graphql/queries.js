import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String,
    $first: Int,
    $after: String
  ) {
    repositories (
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword,
      first: $first,
      after: $after
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const GET_REPOSITORY = gql`
  query (
    $id: ID!
    $first: Int
    $after: String
  ) {
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
      reviews (first: $first, after: $after) {
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
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`

const GET_CURRENT_USER = gql`
  query getCurrentUser ($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            createdAt
            id
            rating
            text
            repositoryId
            user {
              username
            }
          }
        }
      }
    }
  }
`;

export { GET_REPOSITORIES, GET_REPOSITORY, GET_CURRENT_USER };
