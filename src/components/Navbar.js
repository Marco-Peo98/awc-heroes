import React, { useState } from "react";

import '../../src/global.css';
import './Navbar.css';

import marvelLogo from '../images/marvel-logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={ marvelLogo } alt="Marvel Logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__white-title"><a href="#home">HOME</a></li>
        <li className="p__white-title"><a href="#heroes">EROI</a></li>
        <li className="p__white-title"><a href="#catalog">CATALOGO</a></li>
        <li className="p__white-title"><a href="#shop">NEGOZIO</a></li>
        <li className="p__white-title"><a href="#exchanges">SCAMBI</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__white-title">ACCEDI</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={30} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center">
            <IoMdClose color='#fff' fontSize={30} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__white-title"><a href="#home">HOME</a></li>
              <li className="p__white-title"><a href="#heroes">EROI</a></li>
              <li className="p__white-title"><a href="#catalog">CATALOGO</a></li>
              <li className="p__white-title"><a href="#shop">NEGOZIO</a></li>
              <li className="p__white-title"><a href="#exchanges">SCAMBI</a></li>
            </ul>
          </div>
        )};
        
      </div>

      
      {/* <ul className="nav-list">
        <NavUlElement>
          <Logo className="marvel-logo" />
        </NavUlElement>
        <NavUlElement>
          <a href="../../public/index.html">EROI</a>
        </NavUlElement>
        <NavUlElement>
          <a href="../../public/index.html">CATALOGO</a>
        </NavUlElement>
        <NavUlElement>
          <a href="../../public/index.html">NEGOZIO</a>
        </NavUlElement>
        <NavUlElement>
          <a href="../../public/index.html">SCAMBI</a>
        </NavUlElement>
        <NavUlElement>
          <ButtonDefault>LOGIN</ButtonDefault>
        </NavUlElement>
      </ul>      */}
    </nav>
  );
}

export default Navbar;