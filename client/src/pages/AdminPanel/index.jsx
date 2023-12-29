import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";

const AdminPanel = () => {
  const [allUsers, setAllUsers] = useState(null);
  const { user, token } = useAuth();

  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user");
      const data = response.data;
      setAllUsers(data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      console.log(data);
      getAllUsers();
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
            {x.username} <button onClick={() => deleteUser(x._id)}>del</button>
          </h3>
        ))}
    </div>
  );
};

export default AdminPanel;
