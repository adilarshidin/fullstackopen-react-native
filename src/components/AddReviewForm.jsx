import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import font from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    padding: 12,
    gap: "20px"
  },
  input: {
    backgroundColor: "lightgrey",
    padding: 8,
    width: "80%",
    border: "solid",
    fontFamily: font()
  },
  inputError: {
    backgroundColor: "lightgrey",
    padding: 8,
    width: "80%",
    border: "solid red",
    fontFamily: font()
  },
  button: {
    padding: 8,
    backgroundColor: "lightblue",
    borderRadius: 15,
    fontFamily: font()
  }
});

const AddReviewForm = ({ formik }) => {
  return (
    <View style={styles.container}>
      {formik.errors.ownerName ? (
        <View>
          <TextInput
            style={styles.inputError}
            placeholder="Repository's owner username"
            value={formik.values.ownerName}
            onChangeText={formik.handleChange("ownerName")}
          />
          <Text style={{ color: "red" }}>{formik.errors.ownerName}</Text>
        </View>
      ) :
        <View>
          <TextInput
            style={styles.input}
            placeholder="Repository's owner username"
            value={formik.values.ownerName}
            onChangeText={formik.handleChange("ownerName")}
          />
        </View>
      }
      {formik.errors.repositoryName ? (
        <View>
          <TextInput
            style={styles.inputError}
            placeholder="Repository name"
            value={formik.values.repositoryName}
            onChangeText={formik.handleChange("repositoryName")}
          />
          <Text style={{ color: "red" }}>{formik.errors.repositoryName}</Text>
        </View>
      ) :
        <View>
          <TextInput
            style={styles.input}
            placeholder="Repository name"
            value={formik.values.repositoryName}
            onChangeText={formik.handleChange("repositoryName")}
          />
        </View>
      }
      {formik.errors.rating ? (
        <View>
          <TextInput
            style={styles.inputError}
            placeholder="Rating 0 to 100"
            value={formik.values.rating}
            onChangeText={formik.handleChange("rating")}
          />
          <Text style={{ color: "red" }}>{formik.errors.rating}</Text>
        </View>
      ) :
        <View>
          <TextInput
            style={styles.input}
            placeholder="Rating 0 to 100"
            value={formik.values.rating}
            onChangeText={formik.handleChange("rating")}
          />
        </View>
      }
      <View>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Review body"
          value={formik.values.text}
          onChangeText={formik.handleChange("text")}
        />
      </View>
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  )
};

export default AddReviewForm;
