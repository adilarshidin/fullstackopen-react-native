import { useQuery } from "@apollo/client/react";
import { View, Text, Image, Pressable } from "react-native";
import { useParams } from "react-router-native";
import styles from "../styles/RepositoryItem";
import { GET_REPOSITORY } from "../graphql/queries";
import { formatThousands } from "../utils/helpers";
import { openURL } from "expo-linking";

const RepositoryView = () => {
  const params = useParams();
  const id = params.id;

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      id: id
    }
  })

  if (loading) return null;
  const repository = data.repository;
  console.log(repository)
  return (
    <View style={styles.container}>
      <View style={styles.topLeft}>
        <View>
          <Image style={styles.image} source={{
            uri: repository.ownerAvatarUrl
          }} />
        </View>
        <View style={styles.topText}>
          <Text style={styles.textName}>{repository.fullName}</Text>
          <Text style={styles.textDescription}>{repository.description}</Text>
          <View style={styles.textLanguageContainer}>
            <Text style={styles.textLanguage}>{repository.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomColumn}>
          <Text style={styles.bottomNumber}>{formatThousands(repository.stargazersCount)}</Text>
          <Text style={styles.bottomText}>Stars</Text>
        </View>
        <View style={styles.bottomColumn}>
          <Text style={styles.bottomNumber}>{formatThousands(repository.forksCount)}</Text>
          <Text style={styles.bottomText}>Forks</Text>
        </View>
        <View style={styles.bottomColumn}>
          <Text style={styles.bottomNumber}>{repository.reviewCount}</Text>
          <Text style={styles.bottomText}>Reviews</Text>
        </View>
        <View style={styles.bottomColumn}>
          <Text style={styles.bottomNumber}>{repository.ratingAverage}</Text>
          <Text style={styles.bottomText}>Rating</Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={() => openURL(repository.url)}>
        <Text style={styles.textButton}>View in GitHub</Text>
      </Pressable>
    </View>
  );
};

export default RepositoryView;
