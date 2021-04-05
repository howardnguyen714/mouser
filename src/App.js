import React from 'react';
import routes from './config/routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mouser</h1>
      </header>
      { routes }
    </div>
  );
}

export default App;
