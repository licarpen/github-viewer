export const getFetchUser = () => {
  return Promise.resolve({ login: 'licarpen', following: 8 });
};

// eslint-disable-next-line no-unused-vars
export const getFetchUserRepos = (user) => {
  return Promise.resolve([{ name: 'lab1' }, { name: 'lab2' }]);
};
