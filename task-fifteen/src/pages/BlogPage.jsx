import React, { useContext } from "react";
import BlogContent from "../components/blog/BlogContent";
import BlogList from "../components/blog/BlogList";
import Button from "../components/blog/Button";
import Categories from "../components/blog/Categories";
import RelatedBlogs from "../components/blog/RelatedBlogs";
import BlogContext from "../context/BlogContext";

const BlogPage = () => {
  const { updatedBlog } = useContext(BlogContext);

  if (!updatedBlog) {
    return <div>Loading...</div>;
  }

  console.log(updatedBlog.title);

  return (
    <div className="mx-24">
      <p className="text-center pt-10 text-sm text-gray-700">Venue</p>
      <h1 className="text-3xl text-center py-7">{updatedBlog.title}</h1>
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <BlogContent />
          <Button />
          <p className="pt-2 text-gray-700">#categoryHashtag</p>
        </div>
        <div className="col-span-2">
          <BlogList />
          <Categories />
        </div>
      </div>
      <RelatedBlogs />
    </div>
  );
};

export default BlogPage;
