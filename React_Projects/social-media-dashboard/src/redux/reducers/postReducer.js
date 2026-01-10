import { CREATE_POST, LIKE_POST, COMMENT_POST } from '../actions/postActions';

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return [...state, { id: state.length + 1, ...action.payload, likes: 0, comments: [] }];
    case LIKE_POST:
      return state.map((post) =>
        post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
      );
    case COMMENT_POST:
      return state.map((post) =>
        post.id === action.payload.postId
          ? { ...post, comments: [...post.comments, action.payload.comment] }
          : post
      );
    default:
      return state;
  }
};

export default postReducer;