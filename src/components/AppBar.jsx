import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#24292e"
  },
  scroll: {
    display: "flex",
    padding: "2%"
  },
  scrollContent: {
    flexDirection: "row",
    gap: "50%"
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
      <ScrollView
        horizontal
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsHorizontalScrollIndicator={false}
      >
        <Link style={styles.item} to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link style={styles.item} to="/sign-in">
          <Text style={styles.text}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
