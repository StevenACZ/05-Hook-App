import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>

        <div className="navbar-nav">
          <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
          <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
          <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
