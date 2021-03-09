import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogList({ blogs, title }) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div>
              <h2>{blog.title}</h2>
              <p>
                Written by: {blog.author}
              </p>
            </div>
          </Link>
          {/* <button type="button">Delete</button> */}
        </div>
      ))}
    </div>
  );
}
