import React, { useEffect } from 'react';
// import UserInfo from './UserInfo';
// import UserReposList from './UserReposList';
import Loading from '../loading/Loading';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors/userSelectors';

const UserContainer = () => {
  const user = useSelector(getUser);
  console.log('user in UserContainer before useEffect', user);

  useEffect(() => {}, []);

  if(!user) return <Loading />;

  return (
    <>
      <h2>Name: {user.name}</h2>
      <p># Followers: {user.followers}</p>
      <p># Following: {user.following}</p>
      <a href={user.url}>Go to Profile</a>
    </>
  );
};

export default UserContainer;
