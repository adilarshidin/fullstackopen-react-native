import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client/react';
import RepositoryItem from './RepositoryItem';
import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network"
  });

  if (loading) return null;

  const nodes = data ?
    data.repositories.edges.map(edge => edge.node) :
    [];

  return (
    <FlatList
      style={styles.container}
      data={nodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;
