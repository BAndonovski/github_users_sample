import { getAllUsersURL } from '../../consts/github';

export const RECEIVED_USER = 'GITHUB_RECEIVED_SINGLE_USER';
export const receivedUser = user => ({ type: RECEIVED_USER, user });

export const fetchUser = login => async (dispatch) => {
  const res = await fetch(`${getAllUsersURL}${login}`)
    .then(r => r.json());
  dispatch(receivedUser(res));
};