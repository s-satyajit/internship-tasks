import React, { useState } from "react";
import BlogContext from "./BlogContext";
import blogs from "../utils/blogs";

const BlogProvider = ({children}) => {
  const [ blog, setBlog ] = useState(blogs);
  const [ selectedBlog, setSelectedBlog ] = useState(null);
  const [updatedBlog, setUpdatedBlog] = useState(null)

  return (
    <BlogContext.Provider value={{ blog, setBlog, selectedBlog, setSelectedBlog, updatedBlog, setUpdatedBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
