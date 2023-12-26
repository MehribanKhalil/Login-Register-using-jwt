import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>Profile</h1>
      <h2>{user && user.username}</h2>
      
    </div>
  )
}

export default Profile
