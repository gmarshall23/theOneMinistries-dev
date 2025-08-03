/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, isLoading, children, redirectTo = "/" }) => {
  // If still checking authentication, show loading or nothing
  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a proper loading spinner
  }

  if (!user) {
    // User is not authenticated, redirect to specified route (default to home)
    return <Navigate to={redirectTo} replace />;
  }

  // User is authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
