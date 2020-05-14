import React from 'react';
import Configurator from './scenes/configurator'
import Summary from './scenes/summary'

import './App.css';

function App() {
  return (
    <div className="wrapper">
        <Configurator />
        <Summary />
    </div>
  );
}

export default App;
