import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink className='nav-item' to={'/'}>Home</NavLink>
      <NavLink className='nav-item' to={'/LogIn'}>LogIn</NavLink>
      <NavLink className='nav-item' to={'/Register'}>Register</NavLink>
      <NavLink className='nav-item' to={'/Profile'}>Profile</NavLink>
    </nav>
  )
}

export default Navbar
