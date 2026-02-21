import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import { useQuery } from '@apollo/client/react';
import RepositoryList from './RepositoryList';
import SignIn from "./SignIn";
import SignUp from './SignUp';
import AppBar from './AppBar';
import { GET_CURRENT_USER } from '../graphql/queries';
import RepositoryView from './RepositoryView';
import AddReview from "./AddReview";
import UserReviewsView from './UserReviewsView';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8"
  },
  header: {
    padding: "3%"
  }
});

const Main = () => {
  const { data, error, loading } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    variables: {
      includeReviews: true
    }
  });

  if (loading) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rate Repository Application</Text>
      <AppBar data={data} />
      <Routes>
        <Route path="/" element={<RepositoryList userData={data} />} />
        <Route path="/:id" element={<RepositoryView />} />
        <Route path="/sign-in" element={<SignIn userData={data} />} />
        <Route path="/sign-up" element={<SignUp userData={data} />} />
        <Route path="/review" element={<AddReview />} />
        <Route path="/reviews" element={<UserReviewsView reviews={data.me.reviews} />} />
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
