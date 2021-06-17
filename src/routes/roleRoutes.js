import { userRole } from 'constants/index';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const RoleRoutes = ({ requireRoles = [], children }) => {
  const history = useHistory();
  const currUser = useSelector((state) => state.user.current);
  const role = currUser.role || userRole.GUEST;

  useEffect(() => {
    if (!role || requireRoles.length === 0) return;

    const checkRole = requireRoles.includes(role);
    if (!checkRole) {
      history.push({ pathname: '/login' });
    }
  }, [history, role, requireRoles]);

  return <>{children}</>;
};

RoleRoutes.propTypes = {
  children: PropTypes.any,
  requireRoles: PropTypes.array,
};

export default RoleRoutes;
