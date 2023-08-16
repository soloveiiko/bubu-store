import React from 'react';
import { useSelector } from 'react-redux';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return <>{!isAuth ? <PublicRoutes /> : <PrivateRoutes />}</>;
};

export default AppRoutes;
