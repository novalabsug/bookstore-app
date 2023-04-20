import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { IsLoggedInFunc } from './middleware';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!IsLoggedInFunc().status) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
