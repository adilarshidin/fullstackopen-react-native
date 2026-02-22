import { useMutation } from "@apollo/client/react";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);
  
  const deleteReview = async (id) => {
    try {
      const response = await mutate({
        variables: {
          deleteReviewId: id
        }
      })
      return response.data.deleteReview;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        return null;
      }
    }
  };

  return [deleteReview, result];
};

export default useDeleteReview;
