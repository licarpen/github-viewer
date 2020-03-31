export const getFetchUser = () => {
  return Promise.resolve({ login: 'licarpen', following: 8 });
};

export const getFetchUserRepos = (user) => {
  return Promise.resolve([{ name: 'lab1' }, { name: 'lab2' }]);
};
