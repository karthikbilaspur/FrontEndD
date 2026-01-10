import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';

const reducers = {
  counter: counterReducer,
};

export default combineReducers(reducers);