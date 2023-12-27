import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { useAuth } from "../../context/authContext";
const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav className="navbar">
      <NavLink className="nav-item" to={"/"}>
        Home
      </NavLink>
      {user ? (
        <NavLink className="nav-item" to={"/Profile"}>
          Profile
        </NavLink>
      ) : (
        <>
          <NavLink className="nav-item" to={"/LogIn"}>
            LogIn
          </NavLink>
          <NavLink className="nav-item" to={"/Register"}>
            Register
          </NavLink>
        </>
      )}

      {user.role === "admin" && (
        <NavLink className="nav-item" to={"/Admin"}>
          AdminPanel
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
