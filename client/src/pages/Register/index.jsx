import React, { useState } from "react";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  console.log(data);
  // const signup = async (username, password) => {
  //   const response = await fetch("http://localhost:5000/api/auth/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ username, password }),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      username: username,
      password: password
    })
    
    // signup(username,password)
  };

  return (
    <div>
      <h1>Register</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor=" "> Username</label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <button>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
