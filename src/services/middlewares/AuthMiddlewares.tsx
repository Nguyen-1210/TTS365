import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '@app/services/Provider/AuthProvider';

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useContext(AuthContext);
  console.log({token});
  if (token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PublicRoute;