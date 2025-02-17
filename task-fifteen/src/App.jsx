import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage"; // Ensure BlogPage is imported
import Home from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPage />} /> {/* Use BlogPage for blog routes */}
      </Routes>
    </Router>
  );
};

export default App;
