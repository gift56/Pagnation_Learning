import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="row">
      {posts?.map((post, i) => (
        <div className="col-sm-6" style={{ width: "18rem" }}>
          <div className="card">
            <img
              src={post?.picture.large}
              alt={post?.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"></li>
              <li className="list-group-item"></li>
              <li className="list-group-item"></li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
