import React from 'react'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profile</h1>
      <h2> Hi, {user && user.username}</h2>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Profile
