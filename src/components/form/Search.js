import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/userActions';

const Search = () => {
  const [userQuery, setUserQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchUser(userQuery));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='User Search' value={userQuery} onChange={({ target }) => setUserQuery(target.value)}></input>
      <button>Search</button>
    </form>
  );
};

export default Search;
