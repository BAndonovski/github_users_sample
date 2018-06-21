import { getAllUsersURL, getAllUsersPagingKeyword } from '../../consts/github';

export const RECEIVED_USERS = 'GITHUB_RECEIVED_USERS';
export const receivedUsers = users => ({ type: RECEIVED_USERS, users });

export const fetchUsers = users => async (dispatch) => {
  let url = getAllUsersURL;
  if (users !== undefined) {
    url += `?${getAllUsersPagingKeyword}=${users[users.length - 1].id}`;
  }
  const res = await fetch(url)
    .then(r => r.json());
  dispatch(receivedUsers(res));
};
