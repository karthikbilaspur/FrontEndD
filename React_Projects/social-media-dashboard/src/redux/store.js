import { createStore, combineReducers } from 'redux';
import postReducer from './reducers/postReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;