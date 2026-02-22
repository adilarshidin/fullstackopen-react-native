import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import font from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    padding: 12,
    width: "50%",
    //gap: "20px"
  },
  input: {
    backgroundColor: "lightgrey",
    padding: 8,
    borderRadius: 15,
    border: "solid",
    fontFamily: font()
  },
  inputError: {
    backgroundColor: "lightgrey",
    padding: 8,
    borderRadius: 15,
    border: "solid red",
    fontFamily: font()
  },
  button: {
    padding: 8,
    backgroundColor: "lightblue",
    borderRadius: 15,
    fontFamily: font()
  }
})

const SignUpForm = ({ formik }) => {
  return (
    <View style={styles.container}>      
      {formik.touched.username && formik.errors.username ? (
        <View>
          <TextInput
            style={styles.inputError}
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange("username")}
          />
          <Text style={{ color: "red" }}>{formik.errors.username}</Text>
        </View>
      ) :
        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange("username")}
          />
        </View>
      }
      {formik.touched.password && formik.errors.password ? (
        <View>
          <TextInput
            style={styles.inputError}
            secureTextEntry={true}
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
          />
          <Text style={{ color: "red" }}>{formik.errors.password}</Text>
        </View>
      ) :
        <View>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
          />
        </View>
      }
      <Pressable
        onPress={formik.handleSubmit}
        style={styles.button}
      >
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
