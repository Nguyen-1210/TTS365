import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@app/services/Provider/AuthProvider";

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default RequireAuth;
