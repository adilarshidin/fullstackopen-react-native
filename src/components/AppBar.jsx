import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import { Pressable } from 'react-native';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client/react';

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

const AppBar = ({ data }) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  let hasUserData = false;
  if (data.me) {
    const userData = data.me;
    if (userData.id) hasUserData = true;
  }

  const handleSignOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsHorizontalScrollIndicator={false}
      >
        {
          hasUserData ? (
            <>
              <Link style={styles.item} to="/">
                <Text style={styles.text}>Repositories</Text>
              </Link>
              <Pressable style={styles.item} onPress={handleSignOut}>
                <Text style={styles.text}>Sign Out</Text>
              </Pressable>
            </>
          ) :
          <Link style={styles.item} to="/sign-in">
            <Text style={ styles.text}>Sign In</Text>
          </Link>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;
