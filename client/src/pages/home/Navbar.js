import React from 'react';
import "./home.css"


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <a className="navbar-brand" href="/">Billy Board</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home</a>
            <a className="nav-item nav-link" href="/about">About</a>
            <a className="nav-item nav-link" href="/contacts">Contacts</a>
            <a className="nav-item nav-link" href="/login">Login</a>
          </div>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
