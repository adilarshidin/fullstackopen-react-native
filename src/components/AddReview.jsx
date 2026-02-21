import { useFormik } from "formik";
import { object, string, number } from "yup";
import AddReviewForm from "./AddReviewForm";
import useAddReview from "../hooks/useAddReview";
import { useNavigate } from "react-router-native";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: 0,
  text: ""
};

const validationSchema = object({
  ownerName: string().required("Owner username is a required field"),
  repositoryName: string().required("Repository name is a required field"),
  rating: number().integer().positive().required("Rating is a required field"),
  text: string()
})

const ReviewForm = () => {
  const [addReview, result] = useAddReview();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const addReviewResult = await addReview(
      values.ownerName,
      values.repositoryName,
      Number(values.rating),
      values.text
    );
    if (addReviewResult) navigate(`/${addReviewResult}`);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return <AddReviewForm formik={formik} />;
};

export default ReviewForm;
