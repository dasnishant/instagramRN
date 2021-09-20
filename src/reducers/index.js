import {combineReducers} from 'redux';
import userReducer from './userReducer';
import feedsReducer from './feedsReducer';
import allUsersReducer from './allUsersReducer';

const appReducer = combineReducers({
  userReducer,
  feedsReducer,
  allUsersReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOG_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
