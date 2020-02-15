import { getFetchUser, getFetchUserRepos } from '../services/githubApi';

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

export const FETCH_USER_REPOS = 'FETCH_USER_REPOS';
export const fetchUserRepos = (userName) => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  return getFetchUserRepos(userName)
    .then(userRepos => dispatch({
      type: FETCH_USER_REPOS,
      payload: userRepos
    }));
};
