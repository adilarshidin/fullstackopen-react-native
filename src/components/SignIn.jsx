import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useFormik } from "formik";

const initialValues = {
  username: "",
  password: ""
};

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
    borderRadius: "15px"
  },
  button: {
    padding: "3%",
    backgroundColor: "lightblue",
    borderRadius: "15px"
  }
})

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      ></TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      ></TextInput>
      <Pressable
        onPress={formik.handleSubmit}
        style={styles.button}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
