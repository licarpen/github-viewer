import React, { useEffect } from 'react';
// import UserInfo from './UserInfo';
import Loading from '../loading/Loading';
import UserReposList from './UserReposList';
import { useSelector } from 'react-redux';
import { getUser, isLoadingUser } from '../../selectors/userSelectors';

const UserContainer = () => {
  const user = useSelector(getUser);
  const loading = useSelector(isLoadingUser);
  console.log(loading);

  useEffect(() => {}, []);

  if(loading) return <Loading />;
  if(!user) return <p></p>;
  
  return (
    <>
      <div>
        <h2>Name: {user.name}</h2>
        <p># Followers: {user.followers}</p>
        <p># Following: {user.following}</p>
        <a href={user.html_url}>Go to Profile</a>
      </div>
      <UserReposList />

    </>
  );
};

export default UserContainer;
