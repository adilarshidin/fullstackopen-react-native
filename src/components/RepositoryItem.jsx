import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white"
  },
  top: {
    display: "flex",
    flexDirection: "row",
    padding: "2%"
  },
  topText: {
    marginLeft: "2%",
    gap: "5%"
  },
  image: {
    width: 66,
    height: 58,
    borderRadius: "15px"
  },
  textName: {
    fontWeight: "bold"
  },
  textDescription: {
    color: "grey"
  },
  textLanguageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "#0366d6",
    margin: "1%",
    padding: "3%",
    alignSelf: "flex-start"
  },
  textLanguage: {
    color: "white"
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "grey"
  },
  bottomColumn: {
    display: "flex",
    alignItems: "center"
  },
  bottomNumber: {
    fontWeight: "bold"
  },
  bottomText: {
    color: "grey"
  }
});

const formatThousands = (value) => {
  if (value > 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  };
  return value;
};

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.top}>
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
