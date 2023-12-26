import React from "react";
import { useContext } from "react";
import LogIn from "../pages/LogIn";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function PrivateRoute() {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to={"/Register"} />;
}

export default PrivateRoute;
