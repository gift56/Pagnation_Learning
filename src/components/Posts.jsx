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
              <h5 className="card-title">{`${post?.name.title}. ${post?.name.first} ${post?.name.last}`}</h5>
              <p className="card-text">{post?.email}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{post?.location.country}</li>
              <li className="list-group-item">Phone: {post?.cell}</li>
              <li className="list-group-item">Age: {post?.dob.age}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
