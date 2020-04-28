import React, { Component } from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='city tour logo' />

      <ul className='nav-links'>
        <li>
          <a className='nav-link' href='#'>
            home{" "}
          </a>
        </li>
        <li>
          <a className='nav-link' href='#'>
            contact
          </a>
        </li>
        <li>
          <a className='nav-link active ' href='#'>
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
