import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORY } from "../graphql/queries";
import { FlatList, View } from "react-native";
import RepositoryViewHeader from "./RepositoryViewHeader";
import ReviewItem from "./ReviewItem";

const ItemSeparator = () => <View style={{ height: 10 }} />;

const SingleRepository = () => {
  const params = useParams();
  const repositoryId = params.id;

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      id: repositoryId
    }
  })

  if (loading) return null;
  const repository = data.repository;
  let reviews = [];

  if (repository.reviews) {
    reviews = repository.reviews.edges;
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => <RepositoryViewHeader repository={repository} />}
      ItemSeparatorComponent={<ItemSeparator />}
    />
  );
};

export default SingleRepository;
