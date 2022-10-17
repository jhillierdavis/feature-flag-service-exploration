// Avoid Error: 'React' must be in scope when using JSX react/react-in-jsx-scope
// import React, { Component } from 'react';
import React from 'react';

import logo from './logo.svg';
import './App.css';
// Use Launch Darkly service for feature flags
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk' 
import ldlogo from './launch-darkly-logo.png'
import Header from './components/header'

function App() {
  const { logoSwitchEnabled, bottomTextEnabled, headerEnabled } = useFlags()

  return (
    <div className="App">
      <header className="App-header">
        { headerEnabled ? ( <Header /> ) : ( <div /> ) }
        {
          // Use LD feature flag to switch between logos (LD logo or default ReactJS logox)
          logoSwitchEnabled ? ( <img src={ldlogo} className="App-logo" alt="logo" /> ) : ( <img src={logo} className="App-logo" alt="logo" /> )
        }
        <p>
           { bottomTextEnabled }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;

// Wrap application in LD provider
export default withLDProvider ({
  // set LD trail (client-side) SDK key
  clientSideID: '634ab4d0b2761012046b57c7', // Test env.
  options: {
    bootstrap: 'localStorage'
  },
})(App);
