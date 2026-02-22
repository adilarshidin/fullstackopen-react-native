import { useParams } from "react-router-native";
import { FlatList, View } from "react-native";
import RepositoryViewHeader from "./RepositoryViewHeader";
import ReviewItem from "./ReviewItem";
import useRepository from "../hooks/useRepository";

const ItemSeparator = () => <View style={{ height: 10 }} />;

const SingleRepository = () => {
  const params = useParams();
  const repositoryId = params.id;

  const { data, fetchMore } = useRepository({ repositoryId: repositoryId, first: 6 });

  if (!data) return null;

  const repository = data.repository;
  let reviews = [];

  if (repository.reviews) {
    reviews = repository.reviews.edges;
  };

  const onEndReached = () => {
    fetchMore();
  };
  console.log(data.repository.reviews.edges)
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => <RepositoryViewHeader repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
