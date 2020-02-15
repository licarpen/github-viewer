const request = path => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com${path}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};

export const getFetchUser = (userName) => request(`/users/${userName}`);
export const getFetchUserRepos = (userName) => request(`/users/${userName}/repos`);
