import { useMutation } from "@apollo/client/react";
import { ADD_REVIEW } from "../graphql/mutations";

const useAddReview = () => {
  const [mutate, result] = useMutation(ADD_REVIEW);

  const addReview = async (ownerName, repositoryName, rating, text) => {
    try {
      const response = await mutate({
        variables: {
          ownerName: ownerName,
          repositoryName: repositoryName,
          rating: rating,
          text: text
        }
      })
      return response.data.createReview.repositoryId;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        return null;
      }
    }
  };

  return [addReview, result];
};

export default useAddReview;
