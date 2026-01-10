import { useDispatch, useSelector } from 'react-redux';
import { createPost as createPostAction, likePost as likePostAction, commentPost as commentPostAction } from '../redux/actions/postActions';

const usePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const createPost = (post) => {
    dispatch(createPostAction(post));
  };

  const likePost = (postId) => {
    dispatch(likePostAction(postId));
  };

  const commentPost = (postId, comment) => {
    dispatch(commentPostAction(postId, comment));
  };

  return { posts, createPost, likePost, commentPost };
};

export default usePosts;