import { useMutation } from "@apollo/client/react";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client/react";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
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
      await apolloClient.resetStore();
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
