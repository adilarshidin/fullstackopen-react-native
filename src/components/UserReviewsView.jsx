import UserReviewItem from "./UserReviewItem";

const UserReviewsView = ({ reviews }) => {
  const edges = reviews.edges;

  return (
    edges.map(edge => (
      <UserReviewItem key={edge.node.id} node={edge.node} />
    ))
  )
};

export default UserReviewsView;
