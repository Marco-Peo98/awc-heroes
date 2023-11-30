import React from "react";
import './NavUlElement.css';

function NavUlElement(props) {
  return (
    <li className="nav-ul-element">
      {props.children}
    </li>
  );
}

export default NavUlElement;