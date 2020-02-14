const request = path => {
  return fetch(`https://api.github.com${path}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};

export const getUser = (id) => request(`/users/${id}`);
