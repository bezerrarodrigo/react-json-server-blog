import React from 'react';
import useFetch from '../hooks/useFetch';
import BlogList from './BlogList';

export default function Home() {
  // custom hook
  const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <strong style={{ color: 'red' }}>{error}</strong>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
