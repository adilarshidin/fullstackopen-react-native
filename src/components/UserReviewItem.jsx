import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { Link } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 6,
    padding: 6,
    //gap: "20px"
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonView: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: 2,
    backgroundColor: "cyan",
    padding: 6,
    marginBottom: 6
  },
  buttonDelete: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "maroon",
    borderWidth: 2,
    backgroundColor: "pink",
    padding: 6,
    marginBottom: 6
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    flex: "1"
  },
  rating: {
    display: "flex",
    alignItems: "center",
    padding: 25,
    borderRadius: 25,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
    color: "blue",
  },
  right: {
    display: "flex",
    flex: "9",
    //gap: "5px"
  },
  username: {
    fontWeight: "bold"
  },
  date: {
    color: "grey"
  }
});

const UserReviewItem = ({ node }) => {
  const [deleteReview, result] = useDeleteReview();

  const handleReviewDeletion = () => {
    deleteReview(node.id) 
  }

  const createDeleteAlert = () =>
    Alert.alert('Review Deletion', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () => handleReviewDeletion()
      },
    ]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{node.rating}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.username}>{node.user.username}</Text>
          <Text style={styles.date}>{new Date(node.createdAt).toLocaleString()}</Text>
          <Text>{node.text}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Link to={`/${node.repositoryId}`} style={styles.buttonView}>
          <Text>View repository</Text>
        </Link>
        <Pressable style={styles.buttonDelete} onPress={createDeleteAlert}>
          <Text>Delete review</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default UserReviewItem;
