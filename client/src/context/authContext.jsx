import React, { createContext, useContext, useState } from "react";
import axios from "axios";

import { jwtDecode } from "jwt-decode";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")):[]);

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
      console.log("data", data);
      console.log("decoded", decoded);
      setUser(decoded);
      localStorage.setItem("user",JSON.stringify(decoded))
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const login=async (username,password)=>{
    try {
      const response=await axios.post("http://localhost:5000/api/auth/login",{
        username:username,
        password:password
      })
      const data=response.data
      const decodded=jwtDecode(data.token)
      setUser(decodded)
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  const logout=()=>{
    setUser("")
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ signup,login,logout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
