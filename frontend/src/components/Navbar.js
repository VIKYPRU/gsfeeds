import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
  
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/feeds">Feeds</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}
