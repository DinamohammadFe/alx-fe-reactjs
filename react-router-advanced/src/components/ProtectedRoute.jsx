// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // <-- make sure this path matches your project structure

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect unauthenticated users to login page
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child components
  return children;
};

export default ProtectedRoute;
