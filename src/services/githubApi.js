const request = path => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com${path}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      console.log('inside fetch request. JSON: ', json);
      if(!ok) throw json;

      return json;
    });
};

export const getFetchUser = (id) => request(`/users/${id}`);
