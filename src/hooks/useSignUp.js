import { useMutation } from "@apollo/client/react";
import { SIGN_UP } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);

  const signUp = async (username, password) => {
    try {
      const response = await mutate({
        variables: {
          username: username,
          password: password
        }
      });
      return response.data.createUser;
    } catch(error) {
      if (error instanceof Error) {
        console.log(error.message)
        return null;
      }
    }
  };

  return [signUp, result];
};

export default useSignUp;
