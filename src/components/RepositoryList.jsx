import { useNavigate } from 'react-router-native';
import { useEffect, useState } from 'react';
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const mapFilterVariables = (filter) => {
  switch (filter) {
    case "recent": return { orderBy: "CREATED_AT", orderDirection: "DESC" }
    case "highest": return { orderBy: "RATING_AVERAGE", orderDirection: "DESC" }
    case "lowest": return { orderBy: "RATING_AVERAGE", orderDirection: "ASC" }
  }
}

const RepositoryList = ({ userData }) => {
  const [filter, setFilter] = useState("recent");
  const filterVariables = mapFilterVariables(filter);
  const { data, error, loading } = useRepositories(filterVariables);
  let navigate = useNavigate();

  useEffect(() => {
    if (!userData.me) {
      navigate("/sign-in");
    }
  }, [userData.me]);

  return <RepositoryListContainer repositories={data} filter={filter} setFilter={setFilter} />;
};

export default RepositoryList;
