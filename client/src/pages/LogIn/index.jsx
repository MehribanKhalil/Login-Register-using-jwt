import React from "react";
import { useState } from "react";
const LogIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (username, password) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword('')
    setUserName("")
    console.log(username, password);
    handleLogin(username,password)
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
