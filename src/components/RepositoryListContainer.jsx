import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import RepositoryListFilter from './RepositoryListFilter';

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, filter, setFilter }) => {
  const nodes = repositories
    ? repositories.repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.container}
      data={nodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={<RepositoryListFilter filter={filter} setFilter={setFilter} />}
    />
  );
};

export default RepositoryListContainer;
