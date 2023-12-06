import React from "react";

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
          <li className="txt-white ff-title fw-bold"><a href="#home" onClick={() => setOpen(false)} >HOME</a></li>
          <li className="txt-white ff-title fw-bold"><a href="#heroes" onClick={() => setOpen(false)} >EROI</a></li>
          <li className="txt-white ff-title fw-bold"><a href="#catalog" onClick={() => setOpen(false)} >CATALOGO</a></li>
          <li className="txt-white ff-title fw-bold"><a href="#shop" onClick={() => setOpen(false)} >NEGOZIO</a></li>
          <li className="txt-white ff-title fw-bold"><a href="#exchanges" onClick={() => setOpen(false)} >SCAMBI</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;