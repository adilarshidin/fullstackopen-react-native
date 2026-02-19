import { View, Text, Image } from "react-native";
import { Link } from "react-router-native";
import styles from "../styles/RepositoryItem";
import { formatThousands } from "../utils/helpers";

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <View>
            <Image style={styles.image} source={{
              uri: item.ownerAvatarUrl
            }} />
          </View>
          <View style={styles.topText}>
            <Text style={styles.textName}>{item.fullName}</Text>
            <Text style={styles.textDescription}>{item.description}</Text>
            <View style={styles.textLanguageContainer}>
              <Text style={styles.textLanguage}>{item.language}</Text>
            </View>
          </View>
        </View>
        <Link to={`/${item.id}`} style={styles.button}>
          <Text style={styles.textButton}>View</Text>
        </Link>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomColumn}>
          <Text style={styles.bottomNumber}>{formatThousands(item.stargazersCount)}</Text>
          <Text style={styles.bottomText}>Stars</Text>
        </View>
        <View style={styles.bottomColumn}>
          <Text style={styles.bottomNumber}>{formatThousands(item.forksCount)}</Text>
          <Text style={styles.bottomText}>Forks</Text>
        </View>
        <View style={styles.bottomColumn}>
          <Text style={styles.bottomNumber}>{item.reviewCount}</Text>
          <Text style={styles.bottomText}>Reviews</Text>
        </View>
        <View style={styles.bottomColumn}>
          <Text style={styles.bottomNumber}>{item.ratingAverage}</Text>
          <Text style={styles.bottomText}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
