import React from "react";
import { useContext } from "react";
import LogIn from "../pages/LogIn";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function PrivateRoute({ role }) {
  const { user } = useContext(AuthContext);
  return user && role.includes(user.role) ? (
    <Outlet />
  ) : (
    <Navigate to={"/Register"} />
  );
}

export default PrivateRoute;
