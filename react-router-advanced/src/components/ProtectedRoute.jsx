import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = true; // change to false to test redirect

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}
