import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./home.css";
import logo from "../../images/logo.png";



const Navbar = ({children}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
        <img className='logo' src={logo} alt="billy-board-logo"/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse navbar-body " id="navbarSupportedContent">
            
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
                <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                <NavLink className="nav-item nav-link" to="/contacts">Contacts</NavLink>
              </div>
              <div>
              <NavLink className="nav-item nav-link btn btn-secondary btn-login" to="/login">Login</NavLink>
              </div>
           
        </div>

      </nav>
      <Outlet />
      {children}
    </>
  );
}

export default Navbar;
