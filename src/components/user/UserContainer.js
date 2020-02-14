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
      <p>{user.login}</p>
    </>
  );
};

export default UserContainer;
