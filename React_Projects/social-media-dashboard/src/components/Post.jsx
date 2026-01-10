import React from 'react';
import { usePosts } from '../hooks/usePosts';

const Post = ({ post }) => {
  const { likePost, commentPost } = usePosts();

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p>{post.body}</p>
      <div className="flex space-x-2 mt-2">
        <button onClick={() => likePost(post.id)}>Like ({post.likes})</button>
        <button onClick={() => commentPost(post.id)}>Comment</button>
      </div>
    </div>
  );
};

export default Post;