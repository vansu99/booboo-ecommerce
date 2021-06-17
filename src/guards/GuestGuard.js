import { pathNames } from 'constants/index';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const GuestGuard = ({ children }) => {
  const user = useSelector((state) => state.user.current);
  const isLoggedIn = user._id;

  // false -> redirect về root (chưa login)
  if (isLoggedIn) return <Redirect to={pathNames.ROOT} />;
  return <>{children}</>;
};

export default GuestGuard;
