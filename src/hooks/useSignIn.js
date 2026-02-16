import { useMutation } from "@apollo/client/react";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { ApolloClient } from "@apollo/client";

const useSignIn = () => {
  const authStorage = useAuthStorage();
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
      await authStorage.setAccessToken(accessToken);
      ApolloClient.resetStore();
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
