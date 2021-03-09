import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Luigi');
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const newBlog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setIsPending(false);
      console.log('new blog added!');
      // page redirect
      // history.go(-1) // navigate to previous page
      history.push('/');
    });
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Blog Title</label>
        <input
          required
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="body">Blog body</label>
        <textarea
          required
          id="body"
          value={body}
          onChange={(e) => { setBody(e.target.value); }}
        />

        <label htmlFor="author">Author</label>
        <select id="author" value={author} onChange={(e) => { setAuthor(e.target.value); }}>
          <option value="mario">Mario</option>
          <option value="luigi">Luigi</option>
        </select>

        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && <button type="submit" disabled>Adding new Blog...</button>}

      </form>
    </div>
  );
}
export default Create;
