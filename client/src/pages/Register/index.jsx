import React, { useState } from "react";
import { AuthContext, useAuth } from "../../context/authContext";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await signup(username, password);
      navigate("/Profile");
    } catch (error) {
      console.log(error.res.data.message);
    }
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
