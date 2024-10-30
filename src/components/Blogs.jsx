import { useState, useEffect } from 'react';
import blogsData from '../data/blogs.json';
import BlogModal from './BlogModal';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    setBlogs(blogsData.blogs);
  }, []);

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <section id="blogs" className="blogs">
      <h2 className="section-title">My Blogs</h2>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="blog-card"
            onClick={() => openBlog(blog)}
          >
            {blog.image && (
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
            )}
            <div className="blog-card-content">
              <h3>{blog.title}</h3>
              <div className="blog-meta">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <p>{blog.summary}</p>
              <div className="blog-tags">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={closeBlog} />
      )}
    </section>
  );
};

export default Blogs; 