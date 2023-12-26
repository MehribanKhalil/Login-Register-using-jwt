import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await login(username, password);
      navigate("/");
    } catch (error) {
      console.log(error.res.data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor=""> Username</label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label htmlFor=""> Password</label>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <button>SignIn</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
