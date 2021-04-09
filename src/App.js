import React from 'react';
import routes from './config/routes';
import Navbarr from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbarr/>
      { routes }
    </div>
  );
}

export default App;
