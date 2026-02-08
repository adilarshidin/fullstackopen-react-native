import { View, Text } from "react-native";

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>{item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Rating: {item.reviewCount}</Text>
    </View>
  );
};

export default RepositoryItem;
