import { combineReducers } from 'redux';
import { auth } from './auth';
import { gists } from './gists';

const rootReducer = combineReducers({
  auth,
  gists,
});

export default rootReducer;
