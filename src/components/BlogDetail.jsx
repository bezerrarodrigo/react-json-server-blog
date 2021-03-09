import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function BlogDetail() {
  const { id } = useParams();
  const history = useHistory();
  // fetch blog data
  const { data: blog, isPeding, error } = useFetch(`http://localhost:8000/blogs/${id}`);

  function handleDeleteClick() {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <div className="blog-details">
      {isPeding && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            <strong>Written by:</strong> {blog.author}
          </p>
          <div>{blog.body}</div>
          <button type="button" onClick={() => handleDeleteClick(blog.id)}>Delete</button>
        </article>
      )}
    </div>
  );
}
