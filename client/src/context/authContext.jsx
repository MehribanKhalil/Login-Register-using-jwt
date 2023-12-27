import React, { createContext, useContext, useState } from "react";
import axios from "axios";

import { jwtDecode } from "jwt-decode";
import UseLocalStorage from "../hooks/UseLocalStorage";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = UseLocalStorage("user", null);

  const signup = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username: username,
          password: password,
        }
      );
      const data = response.data;
      const decoded = jwtDecode(data.token);
      setUser(decoded);
      UseLocalStorage("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username: username,
          password: password,
        }
      );
      const data = response.data;
      const decoded = jwtDecode(data.token);
      setUser(decoded);
      UseLocalStorage("user", user);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const logout = () => {
    setUser("");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ signup, login, logout, user, setUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
