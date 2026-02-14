import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


const httpLink = new HttpLink({ uri: "http://192.168.68.65:4000/graphql" })

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
  });
};

export default createApolloClient;
