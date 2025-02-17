import React, { useContext } from "react";
import BlogContext from "../../context/BlogContext";

const BlogList = () => {
  const { blog } = useContext(BlogContext);

  return (
    <>
      <div className="border-b-2 pb-3 border-black">RECENT POSTS</div>
      {blog.map((blog) => (
        <div key={blog.id} className="bg-gray-200 p-8">
          <div className="flex justify-between gap-4 my-6">
            <div>
              <img className="h-auto w-48" src={blog.image1} />
            </div>
            <div>
              <p className="font-semibold">{blog.title}</p>
              <p className="py-1">{blog.date}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
