import React, { useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../../context/BlogContext";

const BlogContent = () => {
  const { id } = useParams();
  const { blog, updatedBlog, setUpdatedBlog } = useContext(BlogContext);

  useEffect(() => {
    if (blog && blog.length > 0) {
      const selectedBlog = blog.find((blog) => blog.id === parseInt(id));
      setUpdatedBlog(selectedBlog);
    }
  }, [blog, id]);

  if (!updatedBlog) {
    return <div>Loading...</div>;
  }
  // console.log(updatedBlog.title)

  return (
    <div key={updatedBlog.id}>

      <p className="text-center pb-10 text-sm text-gray-700">{updatedBlog.date}</p>
      <div className="w-200 py-5">{updatedBlog.paragraph1}</div>
      <img className="w-200 pb-5" src={updatedBlog.image1} alt="Blog Image 1" />
      <div className="w-200 py-5">{updatedBlog.paragraph2}</div>
      <img className="w-200 pb-5" src={updatedBlog.image2} alt="Blog Image 2" />
    </div>
  );
};

export default BlogContent;
