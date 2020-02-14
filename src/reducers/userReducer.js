import { FETCH_USER, FETCH_USER_LOADING } from '../actions/userActions';

const initialState = {
  loading: true,
  userInfo: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_LOADING:
      return { ...state, loading: true };
    case FETCH_USER:
      return { ...state, loading: false, userInfo: action.payload };
    default:
      console.log('No user found.');
      return state;
  }
}
