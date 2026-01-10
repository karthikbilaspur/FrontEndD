import React, { useState } from 'react';
import { usePosts } from '../hooks/usePosts';

const PostForm = () => {
  const { createPost } = usePosts();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded-md"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 border rounded-md mt-2"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded-md">
        Post
      </button>
    </form>
  );
};

export default PostForm;