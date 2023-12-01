import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = (props) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Route {...props} /> : <Navigate to="/LoginForm" />;
};

export default PrivateRoute;
