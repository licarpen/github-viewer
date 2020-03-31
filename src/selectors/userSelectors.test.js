import { isLoadingUser, getUser, isLoadingUserRepos, getUserRepos } from '../selectors/userSelectors';

describe('user selectors', () => {
  it('selects the user loading state', () => {
    const state =  {
      loadingUser: true,
      userInfo: null
    };

    const loading = isLoadingUser(state);

    expect(loading).toEqual(true);
  });

  it('selects the user state', () => {
    const state = {
      userInfo: { login: 'licarpen', followers: 8 }
    };
    const userInfo = getUser(state);
    expect(userInfo).toEqual({ login: 'licarpen', followers: 8 });
  });
});

describe('userRepos selectors', () => {
  it('selects the userRepos loading state', () => {
    const state =  {
      loadingUserRepos: true,
      userRepos: null
    };

    const loading = isLoadingUserRepos(state);

    expect(loading).toEqual(true);
  });

  it('selects the userRepos state', () => {
    const state = {
      userRepos: [{ name: 'lab1' }, { name: 'lab2' }]
    };
    const userRepos = getUserRepos(state);
    expect(userRepos).toEqual([{ name: 'lab1' }, { name: 'lab2' }]);
  });
});
