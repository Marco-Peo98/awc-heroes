import React from "react";
import '../../src/global.css';
import './ButtonDefault.css';

function ButtonDefault({ children, onClick }) {
  return (
    <div className="btn__default">
      <button className="btn__default-glass" onClick={onClick}>
        { children }
      </button>
    </div>
  );
}

export default ButtonDefault;