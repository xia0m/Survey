import React from 'react';

const Navbar = ()=>(
  <nav className="transparent">
    <div className="container">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Ez Survey</a>
        <ul className="right">
          <li>
            <a className="active-link" href="/">Home</a>
          </li>
          <li>
            <a href="#login-modal" className="btn purple modal-trigger">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar;