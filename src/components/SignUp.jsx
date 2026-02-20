import { useFormik } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
import SignUpForm from "./SignUpForm";

const initialValues = {
  username: "",
  password: ""
};

const validationSchema = object({
  username: string().required("Username is a required field"),
  password: string().required("Password is a required field")
});

const SignUp = ({ userData }) => {
  const [signUp, signUpResult] = useSignUp();
  const [signIn, signInResult] = useSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.me) {
      navigate("/");
    }
  }, [userData.me])

  const onSubmit = async (values) => {
    const result = await signUp(values.username, values.password);
    if (result && result.username && result.id) {
      signIn(result.username, values.password)
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return <SignUpForm formik={formik} />;
};

export default SignUp;
