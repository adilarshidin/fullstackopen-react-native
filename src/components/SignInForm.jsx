import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import font from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    padding: "4%",
    width: "50vw",
    gap: "20px"
  },
  input: {
    backgroundColor: "lightgrey",
    padding: "3%",
    borderRadius: "15px",
    border: "solid",
    fontFamily: font()
  },
  inputError: {
    backgroundColor: "lightgrey",
    padding: "3%",
    borderRadius: "15px",
    border: "solid red",
    fontFamily: font()
  },
  button: {
    padding: "3%",
    backgroundColor: "lightblue",
    borderRadius: "15px",
    fontFamily: font()
  }
})

const SignInForm = ({ formik }) => {
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
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
