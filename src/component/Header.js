import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <NavLink to="/">
            <button>Home</button>
        </NavLink>
        <NavLink to="/addUser">
            <button>Add User</button>
        </NavLink>
    </div>
  )
}

export default Header