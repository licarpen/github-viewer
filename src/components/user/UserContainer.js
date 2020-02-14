import React, { useEffect } from 'react';
import UserInfo from './UserInfo';
// import UserReposList from './UserReposList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/userActions';
import { getUser } from '../../selectors/userSelectors';

const UserContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      {user}
    </>
  );
};

export default UserContainer;
