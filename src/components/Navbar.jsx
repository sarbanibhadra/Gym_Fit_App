import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../styles/Navbar.css"
import logo from "../images/Shape-3.svg"

const Navbar = () => {
 return (
  <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
          <a class="navbar-brand" href="/"><img src={logo} alt="logo" width="35" class="d-inline-block align-text-center"/></a>

          <a href="/" id="brandName"><span class="fw-bold">GYMFIT</span></a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end align-center" id="navbarNav">
              <ul class="navbar-nav">
                  <Link class="nav-item">
                      <a class="nav-link" aria-current="page" href="/">Exercises</a>
                  </Link>
                  <Link class="nav-item">
                      <a class="nav-link" href="/">BMI</a>
                  </Link>
                  <Link class="nav-item">
                      <a class="nav-link" href="/">Contact</a>
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