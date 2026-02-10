import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#24292e"
  },
  item: {
    padding: "2%",
  },
  text: {
    color: "white"
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.item} to="/">
        <Text style={styles.text}>Repositories</Text>
      </Link>
      <Link style={styles.item} to="/sign-in">
        <Text style={styles.text}>Sign In</Text>
      </Link>
    </View>
  );
};

export default AppBar;
