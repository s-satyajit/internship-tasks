import react from 'react'
import blogs from '../../utils/blogs';
import { Link } from 'react-router-dom';

const BlogPostPreview = () => {
    
    return (
        <>
        {blogs.map((blog) => (
            <div>
                <h1>
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h1>
                <p>{blog.paragraph1}</p>
                <img src={blog.image1} />
                <p>{blog.paragraph2}</p>
                <img src={blog.image2} />
            </div>
        ))}
        </>
    )
}

export default BlogPostPreview;