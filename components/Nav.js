import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function() {
  return <ul className='nav'>
    <li>
      <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
      <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
    </li>
  </ul>  
}
