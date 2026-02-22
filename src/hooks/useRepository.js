import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    nextFetchPolicy: "cache-and-network",
    variables: {
      id: variables.repositoryId,
      first: variables.first
    }
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    };

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  if (loading) return {
    data: null,
    fetchMore: handleFetchMore
  };

  return {
    data: data,
    fetchMore: handleFetchMore
  };
};

export default useRepository;
