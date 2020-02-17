import { FETCH_USER_LOADING, FETCH_USER, FETCH_USER_REPOS_LOADING, FETCH_USER_REPOS } from '../actions/userActions';
import reducer from './userReducer';

describe('user reducer', () => {
  it('handles the fetch user loading action', () => {
    const action = { type: FETCH_USER_LOADING };
    const initialState = { loadingUser: false, userInfo: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loadingUser: true,
      userInfo: null
    });
  });

  it('handles the fetch user action', () => {
    const action = {
      type: FETCH_USER,
      payload: { login: 'licarpen', followers: 8 }
    };

    const initialState = { loadingUser: true, userInfo: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loadingUser: false,
      userInfo: { login: 'licarpen', followers: 8 }
    });
  });
});

describe('userRepos reducer', () => {
  it('handles the fetch userRepos loading action', () => {
    const action = { type: FETCH_USER_REPOS_LOADING };
    const initialState = { loadingUserRepos: false, userRepos: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loadingUserRepos: true,
      userRepos: null
    });
  });

  it('handles the fetch user repos action', () => {
    const action = {
      type: FETCH_USER_REPOS,
      payload: [{ name: 'lab1' }, { name: 'lab2' }]
    };

    const initialState = { loadingUserRepos: true, userRepos: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loadingUserRepos: false,
      userRepos: [{ name: 'lab1' }, { name: 'lab2' }]
    });
  });
});
