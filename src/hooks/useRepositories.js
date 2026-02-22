import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    nextFetchPolicy: "cache-and-network",
    variables: {
      orderBy: variables.orderBy,
      orderDirection: variables.orderDirection,
      searchKeyword: variables.searchKeyword,
      first: variables.first
    }
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    };

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  if (loading) return {
    repositories: null,
    fetchMore: handleFetchMore
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore
  };
};

export default useRepositories;
