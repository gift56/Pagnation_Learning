import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)
  return (
    <div className="container">
      <h1>My App</h1>
    </div>
  );
};

export default App;
