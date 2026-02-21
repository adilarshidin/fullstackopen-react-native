import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const result = useQuery(GET_REPOSITORIES, {
    nextFetchPolicy: "cache-and-network",
    variables: {
      orderBy: variables.orderBy,
      orderDirection: variables.orderDirection,
      searchKeyword: variables.searchKeyword
    }
  })
  return result;
};

export default useRepositories;
