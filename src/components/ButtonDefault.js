import React from "react";
import '../../src/global.css';
import './ButtonDefault.css';

function ButtonDefault( props ) {
  return (
    <button className="btn-default">
      { props.children }
    </button>
  );
}

export default ButtonDefault;