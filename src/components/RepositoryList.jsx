import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useNavigate } from 'react-router-native';
import { useEffect } from 'react';
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = ({ userData }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!userData.me) {
      navigate("/sign-in");
    }
  }, [userData.me]);

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network"
  });

  if (loading) return null;

  return <RepositoryListContainer repositories={data} />;
};

export default RepositoryList;
