import { RECEIVED_USER } from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVED_USER: return action.user;
    default: return state;
  }
};

export default reducer;
