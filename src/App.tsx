/*
 * Copyright (c) 2022. Revo Digital
 * ---
 * Author: gabriele
 * File: App.tsx
 * Project: react-url-managing
 * Committed last: 2022/7/21 @ 1522
 * ---
 * Description:
 */

import React from 'react';
import logo  from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={ { margin: '10px' } }>
          <img src={ logo } alt="logo" style={ { width: '100px' } }/>
          <p style={ { marginTop: '20px' } }>
            Build using <code
            style={ {
              background: 'darkgray',
              padding: '2px',
              borderRadius: '5px'
            } }>npm run
            build:prod</code> to see different urls for the application
          </p>
          Powered by <a target="NEW" href="https://revodigital.it/"
                        style={ { color: 'black' } }>Revo
          Digital</a>
        </div>
      </header>
    </div>
  );
}

export default App;
