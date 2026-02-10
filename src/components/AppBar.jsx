import { View, Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#24292e",
    color: "white",
  },
  item: {
    padding: "2%"
  }
});

const AppBar = () => {
  return <View>
    <Pressable style={styles.item}>
      <Text>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;
