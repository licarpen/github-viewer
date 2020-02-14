import { FETCH_USER } from '../actions/userActions';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case FETCH_USER:
      return [action.payload, ...state];
    default:
      console.log('No user found.');
      return state;
  }
}
