import React, { useEffect } from 'react';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { usePosts } from '../hooks/usePosts';

const Feed = () => {
  const { posts, createPost } = usePosts();

  useEffect(() => {
    // Fetch posts from API or Redux store
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Feed</h1>
      <PostForm />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;