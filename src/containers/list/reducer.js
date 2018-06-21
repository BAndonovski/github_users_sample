import { RECEIVED_USERS } from './actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_USERS: return action.users;
    default: return state;
  }
};

export default reducer;
