import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  username: "",
  password: ""
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
})

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
    border: "solid"
  },
  inputError: {
    backgroundColor: "lightgrey",
    padding: "3%",
    borderRadius: "15px",
    border: "solid red"
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
    validationSchema,
    onSubmit
  });

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
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      ></TextInput>
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red" }}>{formik.errors.password}</Text>
      )}
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
