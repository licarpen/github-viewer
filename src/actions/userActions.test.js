import { fetchUser, FETCH_USER, fetchUserRepos, FETCH_USER_REPOS } from './userActions';

jest.mock('../services/githubApi.js');

describe('user actions', () => {
  it('creates a fetch user action', () => {
    const dispatch = jest.fn();
    const action = fetchUser('licarpen');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: 'FETCH_USER_LOADING'
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USER,
          payload: { login: 'licarpen', following: 8 }
        });
      });
  });
})
;

describe('userRepos actions', () => {
  it('creates a fetch userRepos action', () => {
    const dispatch = jest.fn();
    const action = fetchUserRepos('licarpen');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: 'FETCH_USER_REPOS_LOADING'
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USER_REPOS,
          payload: [{ name: 'lab1' }, { name: 'lab2' }]
        });
      });
  });
})
;
