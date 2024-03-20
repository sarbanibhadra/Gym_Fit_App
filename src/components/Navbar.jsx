import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../styles/Navbar.css"
import logo from "../images/Shape-1.svg"

const Navbar = () => {
 return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
          <Link className="navbar-brand" to="/"><img src={logo} alt="logo" width="35" className="d-inline-block align-text-center"/></Link>

          <Link to="/" id="brandName"><span className="fw-bold">GYMFIT</span></Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end align-center" id="navbarNav">
              <ul className="navbar-nav">
                  <Link className="nav-item nav-link" to="/exercises">
                    Exercises
                  </Link>
                  <Link className="nav-item nav-link" to="/">
                      BMI
                  </Link>
                  <Link className="nav-item nav-link" to="/contact">
                      Contact
                  </Link>
              </ul>
          </div>
      </div>

    </nav> 
    
    <Outlet/>
    </>
 );
};

export default Navbar;