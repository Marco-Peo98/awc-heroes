import React from "react";

import '../../src/global.css';
import './Navbar.css';

import marvelLogo from '../images/marvel-logo.svg';
import ButtonDefault from "./ButtonDefault";
import { IconMenu } from "./Icons";

function Navbar({ open, setOpen, setLogin }) {

  return (
    <nav className="app__navbar">
      <div className="app__navbar-container app__navbar-logo">
        <img src={ marvelLogo } alt="Marvel Logo" />
      </div>
      <div className="app__navbar-container app__navbar-list">
        <ul className="app__navbar-links">
          <li className="ff-title fw-bold"><a href="#home">HOME</a></li>
          <li className="ff-title fw-bold"><a href="#heroes">EROI</a></li>
          <li className="ff-title fw-bold"><a href="#catalog">CATALOGO</a></li>
          <li className="ff-title fw-bold"><a href="#shop">NEGOZIO</a></li>
          <li className="ff-title fw-bold"><a href="#exchanges">SCAMBI</a></li>
        </ul>
      </div>
      <div className="app__navbar-container app__navbar-login">
        <ButtonDefault onClick={() => setLogin(true)}>ACCEDI</ButtonDefault>
      </div>

      {/* ON MOBILE */}
      <div className="app__navbar-container app__navbar-icon">
        { !open && <IconMenu onClick={() => setOpen(!open)} /> }
      </div>
    </nav>
  );
}

export default Navbar;