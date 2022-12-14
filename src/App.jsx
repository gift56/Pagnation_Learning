import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import Header from "./components/Header";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://randomuser.me/api/?results=100");
      setUsers(res.data.results);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Getting current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  // navigate between page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="text-info mb-3">Users Generator</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={users.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default App;
