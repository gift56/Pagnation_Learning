import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="row">
      {posts?.map((post, i) => (
        <div className="col-sm-6">
          <div className="card">
            <img
              src={post?.picture.large}
              alt={post?.name}
              className="card-img-top"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
