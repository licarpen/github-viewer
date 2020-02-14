export const FETCH_USER = 'FETCH_USER';
export const fetchUser = userQuery => ({
  type: FETCH_USER,
  payload: userQuery
});
