import React from 'react';
import routes from './config/routes';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      { routes }
    </div>
  );
}

export default App;
