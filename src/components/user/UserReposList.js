import React, { useEffect } from 'react';
import Loading from '../loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getUserRepos, isLoadingUserRepos } from '../../selectors/userSelectors';
import { fetchUserRepos } from '../../actions/userActions';


const UserReposList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingUserRepos);
  const user = useSelector(getUser);
  const userRepos = useSelector(getUserRepos);

  useEffect(() => {
    dispatch(fetchUserRepos(user.login));
  }, [user]);

  if(loading) return <Loading />;
  if(!userRepos) return <p></p>;

  const reposList = userRepos.map(repoInfo => {
    return <li key={repoInfo.name}>{repoInfo.name}</li>;});
    
  return (
    <ul>
      {reposList}
    </ul>
    
  );
};

export default UserReposList;
