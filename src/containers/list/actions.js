import { getAllUsersURL } from '../../consts/github';

export const RECEIVED_USERS = 'GITHUB_RECEIVED_USERS';
export const receivedUsers = users => ({ type: RECEIVED_USERS, users });

export const fetchUsers = () => async (dispatch) => {
  const res = await fetch(getAllUsersURL)
    .then(r => r.json());
  dispatch(receivedUsers(res));
};
