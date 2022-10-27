import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading)
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-grow ms-auto text-info"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );

  return (
    <div className="row my-4 g-4">
      {posts?.map((post, i) => (
        <div className="col-sm-6 col-lg-4 col-xl-3" key={i}>
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
              <li className="list-group-item">
                Country: {post?.location.country}
              </li>
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
