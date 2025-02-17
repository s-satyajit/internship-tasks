import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <Link to="/blog/1">Go to Blog 1</Link>
    </div>
  );
};

export default Home;
