import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./home.css"


const Navbar = ({children}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <NavLink className="navbar-brand" to="/">Billy Board</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            <NavLink className="nav-item nav-link" to="/contacts">Contacts</NavLink>
            <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          </div>
        </div>

      </nav>
      <Outlet />
      {children}
    </>
  );
}

export default Navbar;
