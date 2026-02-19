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

const ReviewItem = ({ review }) => {
  console.log(review)
  const date = new Date(review.createdAt);
  const formattedDate = `${date.toLocaleString()}`;

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.username}>{review.user.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
};

export default ReviewItem;
