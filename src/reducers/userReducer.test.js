import { FETCH_USER_LOADING, FETCH_USER } from '../actions/userActions';
import reducer from './userReducer';

describe('user reducer', () => {
  it('handles the fetch user loading action', () => {
    const action = { type: FETCH_USER_LOADING };
    const initialState = { loading: false, userInfo: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      userInfo: null
    });
  });

  it('handles the fetch user action', () => {
    const action = {
      type: FETCH_USER,
      payload: { login: 'licarpen', followers: 8 }
    };

    const initialState = { loading: true, userInfo: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      userInfo: { login: 'licarpen', followers: 8 }
    });
  });
});
