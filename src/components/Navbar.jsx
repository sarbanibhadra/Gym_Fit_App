import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
 return (
  <>
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">GymFit</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/gymfit">Exercises</Link>
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/description">Logo</Link>
        </div>
        
      </div>        
      

    </nav>      
    
    <Outlet/>
    </>
 );
};

export default Navbar;