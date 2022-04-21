import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

import { gql, useQuery } from '@apollo/client';


const Header = () => {


  return (
    <div>
        <NavLink to="/">
            <button>Home</button>
        </NavLink>
        <NavLink to="/addUser">
            <button>Add User</button>
        </NavLink>
        {/* <NavLink to="/gqhome">
            <button>Add User Using GraphQL</button>
        </NavLink> */}
    </div>
  )
}

export default Header