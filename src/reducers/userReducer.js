import { FETCH_USER, FETCH_USER_LOADING, FETCH_USER_REPOS, FETCH_USER_REPOS_LOADING } from '../actions/userActions';

const initialState = {
  userLoading: false,
  userReposLoading: false,
  userInfo: null,
  userRepos: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_LOADING:
      return { ...state, loading: true };
    case FETCH_USER_REPOS_LOADING:
      return { ...state, loading: true };
    case FETCH_USER:
      return { ...state, loading: false, userInfo: action.payload };
    case FETCH_USER_REPOS:
      return { ...state, loading: false, userRepos: action.payload };
    default:
      // eslint-disable-next-line no-console
      console.log('No user found.');
      return state;
  }
}
