import React from "react";

const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return <nav>
    <ul className="pagination"></ul>
  </nav>;
};

export default Pagination;
