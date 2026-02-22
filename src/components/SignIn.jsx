import { useFormik } from "formik";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";
import SignInForm from "./SignInForm";

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

const SignIn = ({ userData }) => {
  const [signIn, result] = useSignIn();
  let navigate = useNavigate();

  useEffect(() => {
    if (userData && userData.me) {
      navigate("/");
    }
  }, [userData])

  const onSubmit = (values) => {
    signIn(values.username, values.password);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  if (result.called && result.error) console.log(result.error);

  return <SignInForm formik={formik} />
};

export default SignIn;
