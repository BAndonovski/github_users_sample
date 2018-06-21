import { combineReducers } from 'redux';
import usersReducer from '../containers/list/reducer';
import singleUserReducer from '../containers/details/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  user: singleUserReducer,
});

export default rootReducer;
