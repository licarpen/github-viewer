import { FETCH_USER, FETCH_USER_LOADING, FETCH_USER_REPOS, FETCH_USER_REPOS_LOADING } from '../actions/userActions';

const initialState = {
  loadingUser: false,
  loadingUserRepos: false,
  userInfo: null,
  userRepos: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_LOADING:
      return { ...state, loadingUser: true };
    case FETCH_USER_REPOS_LOADING:
      return { ...state, loadingUserRepos: true };
    case FETCH_USER:
      return { ...state, loadingUser: false, userInfo: action.payload };
    case FETCH_USER_REPOS:
      return { ...state, loadingUserRepos: false, userRepos: action.payload };
    default:
      // eslint-disable-next-line no-console
      console.log('No user found.');
      return state;
  }
}
