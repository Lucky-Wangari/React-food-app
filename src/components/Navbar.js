import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">Foodle</span>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Offer</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="#">Login</a>
        <a  className="sign" href="#">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
