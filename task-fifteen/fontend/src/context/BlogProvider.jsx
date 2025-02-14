import React, { Children } from "react";
import BlogContext from "./BlogContext";

const BlogProvider = () => {

    

    return (
        <BlogContext.Provider value={}>
            {Children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;