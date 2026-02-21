import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    margin: "2%",
    padding: "2%",
    gap: "20px"
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    flex: "1"
  },
  rating: {
    display: "flex",
    alignItems: "center",
    padding: "25%",
    borderRadius: "25px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "blue",
    color: "blue",
  },
  right: {
    display: "flex",
    flex: "9",
    gap: "5px"
  },
  username: {
    fontWeight: "bold"
  },
  date: {
    color: "grey"
  }
})

const UserReviewsView = ({ reviews }) => {
  const edges = reviews.edges;
  return (
    edges.map(edge => (
      <View key={edge.node.id} style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{edge.node.rating}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.username}>{edge.node.user.username}</Text>
          <Text style={styles.date}>{new Date(edge.node.createdAt).toLocaleString()}</Text>
          <Text>{edge.node.text}</Text>
        </View>
      </View>
    ))
  )
};

export default UserReviewsView;
