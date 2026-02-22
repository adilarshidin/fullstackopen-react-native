import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 4,
    margin: 2
  }
});

const RepositoryListFilter = ({ filter, setFilter }) => {
  return (
    <Picker
      style={styles.container}
      selectedValue={filter}
      onValueChange={(itemValue, itemIndex) =>
        setFilter(itemValue)
      }>
      <Picker.Item label="Recent reviews" value="recent" />
      <Picker.Item label="Highest rating" value="highest" />
      <Picker.Item label="Lowest rating" value="lowest" />
    </Picker>
  )
};

export default RepositoryListFilter;
