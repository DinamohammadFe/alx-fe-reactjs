// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // <-- this must be imported and used

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // <-- this is required

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
