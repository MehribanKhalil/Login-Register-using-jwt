import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";

const AdminPanel = () => {
  const [allUsers, setAllUsers] = useState(null);
  const { user } = useAuth();

  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user");
      const data = response.data;
      setAllUsers(data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [user]);

  return (
    <div>
      <h1>Admin page</h1>
      {allUsers &&
        allUsers.map((x) => (
          <h3>
            {x.username} <button>del</button>
          </h3>
        ))}
    </div>
  );
};

export default AdminPanel;
