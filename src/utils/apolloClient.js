import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import Constants from "expo-constants";

const httpLink = new HttpLink({ uri: Constants.expoConfig.extra.apolloUri });

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
  });
};

export default createApolloClient;
