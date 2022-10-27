import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) return <h2>Loading...</h2>;

  return (
    <ul className="list-group mb-4">
      {posts?.map((post) => (
        <li className="list-group-item">{post?.cell}</li>
      ))}
    </ul>
  );
};

export default Posts;
