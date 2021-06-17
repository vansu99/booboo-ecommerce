import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { StorageKeys, pathNames } from 'constants/index';

const AuthGuard = ({ children }) => {
  // check token cho các trang trong Dashboard
  const user = useSelector((state) => state.user.current);
  const isLoggedIn = user._id;

  // false -> login
  if (!isLoggedIn && !localStorage.getItem(StorageKeys.TOKEN)) return <Redirect to={pathNames.LOGIN} />;

  return <>{children}</>;
};

export default AuthGuard;
