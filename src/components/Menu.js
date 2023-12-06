import React, { useState } from "react";

import '../../src/global.css';
import './Menu.css';
import { IconClose } from "./Icons";

function Menu ({ open, setOpen }) {

  return (
    <div className="app__menu">
      <div className="app__menu-icon">
        { !open && <IconClose onClick={() => setOpen(false)} /> }
      </div>
      <div className="app__menu-content">
        <ul className="app__menu-list">
          <li className="txt-white ff-title fw-bold"><a href="#home">HOME</a></li>
          <li className="txt-white ff-title fw-bold"><a href="#heroes">EROI</a></li>
          <li className="txt-white ff-title fw-bold"><a href="#catalog">CATALOGO</a></li>
          <li className="txt-white ff-title fw-bold"><a href="#shop">NEGOZIO</a></li>
          <li className="txt-white ff-title fw-bold"><a href="#exchanges">SCAMBI</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;