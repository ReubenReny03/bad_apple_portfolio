import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

const BlogModal = ({ blog, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <IoClose />
        </button>
        
        <div className="blog-modal-image">
          <img src={blog.image} alt={blog.title} />
        </div>
        
        <article className="blog-full">
          <h2>{blog.title}</h2>
          <div className="blog-meta">
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>
          <div className="blog-tags">
            {blog.tags.map((tag, index) => (
              <span key={index} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </div>
  );
};

export default BlogModal; 