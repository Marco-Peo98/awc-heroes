import React from "react";

import '../../src/global.css';
import './LoginForm.css';
import { IconClose } from "./Icons";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function LoginForm({ setLogin }) {

  return (
    <div className="app__login">
      <div className="glass-effect">
        <div className="app__login-close">
          <IconClose onClick={() => setLogin(false)} />
        </div>

        <div className="app__login-container">
          <form action="">

            <h1>Accedi</h1>
            <div className="app__login-input_box">
              <input type="email" placeholder="Email" required />
              <FaUser className="login__icon"/>
            </div>
            <div className="app__login-input_box">
              <input type="password" placeholder="Password" required />
              <FaLock className="login__icon"/>
            </div>

            <div className="app__login-remember">
              <label><input type="checkbox" />Ricordami</label>
              <a href="/">Password dimenticata?</a>
            </div>

            <div className="app__login-button">
              <button type="submit">Accedi</button>
            </div>
            
            <div className="app__login-signup">
              <p>Non hai un account? <a href="/">Registrati ora!</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;