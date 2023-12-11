import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Menu from './components/Menu';
import LoginForm from './components/LoginForm';

function App() {

  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <section className="app">
      <Navbar open={open} setOpen={setOpen} login={login} setLogin={setLogin} />
      { open && <Menu setOpen={setOpen} /> }
      { login && <LoginForm setLogin={setLogin} />}
    </section>
  );
}

export default App;
