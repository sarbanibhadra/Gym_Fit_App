import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
            <a className="navbar-brand" href="./index.html"><img src="./assets/images/Shape-3.svg" alt="a logo with a letter F" width="50" className="d-inline-block align-text-center"/></a>

            <a href="./index.html" id="brandName"><span className="fw-bold">Flavor Fusion</span></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end align-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Execises</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Metrics</a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>

    );
  }
  
  export default Navbar;