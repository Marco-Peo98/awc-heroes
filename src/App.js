import React, { useState } from 'react';

import Main from './components/Main';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <section className="app">
      <Navbar open={open} setOpen={setOpen} />
      { open && <Menu setOpen={setOpen} /> }
      <Main />
    </section>
  );
}

export default App;
