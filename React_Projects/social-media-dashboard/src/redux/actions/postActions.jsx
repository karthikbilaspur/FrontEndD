export const CREATE_POST = 'CREATE_POST';
export const LIKE_POST = 'LIKE_POST';
export const COMMENT_POST = 'COMMENT_POST';

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const likePost = (postId) => {
  return {
    type: LIKE_POST,
    payload: postId,
  };
};

export const commentPost = (postId, comment) => {
  return {
    type: COMMENT_POST,
    payload: { postId, comment },
  };
};