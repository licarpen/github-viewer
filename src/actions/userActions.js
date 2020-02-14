import { getFetchUser } from '../services/githubApi';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER = 'FETCH_USER';
export const fetchUser = (userQuery) => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  return getFetchUser(userQuery)
    .then(user => dispatch({
      type: FETCH_USER,
      payload: user
    }));
};
