import { useNavigate } from 'react-router-native';
import { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useFormik } from "formik";
import { object, string } from 'yup';
import { useDebounce } from 'use-debounce';
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const styles = StyleSheet.create({
  search: {
    padding: "2%",
    margin: "1%",
    border: "solid",
    backgroundColor: "white",
    width: "70vw"
  }
});

const mapFilterVariables = (filter) => {
  switch (filter) {
    case "recent": return { orderBy: "CREATED_AT", orderDirection: "DESC" }
    case "highest": return { orderBy: "RATING_AVERAGE", orderDirection: "DESC" }
    case "lowest": return { orderBy: "RATING_AVERAGE", orderDirection: "ASC" }
  }
};

const initialValues = {
  searchKeyword: ""
};

const validationSchema = object({
  searchKeyword: string()
});

const RepositoryList = ({ userData }) => {
  const [filter, setFilter] = useState("recent");
  const filterVariables = mapFilterVariables(filter);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema
  });
  const [debouncedSearchKeyword] = useDebounce(formik.values.searchKeyword, 500)

  useEffect(() => {
    if (!userData.me) {
      navigate("/sign-in");
    }
  }, [userData.me]);

  if (formik.values.searchKeyword) {
    filterVariables["searchKeyword"] = debouncedSearchKeyword;
  }
  const { data, error, loading } = useRepositories(filterVariables);

  return (
    <>
      <TextInput
        style={styles.search}
        value={formik.values.searchKeyword}
        placeholder="Search keyword"
        onChangeText={formik.handleChange("searchKeyword")}
      />
      <RepositoryListContainer repositories={data} filter={filter} setFilter={setFilter} />
    </>
  )
};

export default RepositoryList;
