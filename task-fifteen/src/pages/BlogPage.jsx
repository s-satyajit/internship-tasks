import React from "react";
import BlogContent from "../components/blog/BlogContent";
import BlogList from "../components/blog/BlogList";
import Categories from "../components/blog/Categories";
import RelatedBlogs from "../components/blog/RelatedBlogs";

const BlogPage = () => {
  return (
    <>
      <div className="mx-24">
        <h1 className="text-3xl text-center py-10">Blog</h1>
        <div className="grid grid-cols-6">
          <div className="col-span-4">
            <BlogContent />
          </div>
          <div className="col-span-2">
            <BlogList />
            <Categories />
          </div>
          <RelatedBlogs />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
