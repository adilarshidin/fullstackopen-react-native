import { useMutation } from "@apollo/client/react";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async (username, password) => {
    try {
      const response = await mutate({
        variables: {
          username: username,
          password: password
        }
      });

      const accessToken = response.data.authenticate.accessToken;
      return accessToken;
    } catch(error) {
      if (error instanceof Error) {
        return null;
      }
    }
  };

  return [signIn, result];
};

export default useSignIn;
