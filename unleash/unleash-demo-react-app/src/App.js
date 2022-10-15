import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './components/header'

import { FlagProvider } from '@unleash/proxy-client-react';

const config = {
  // url: 'https://PROXY_HOSTNAME/api/proxy', // or https://UNLEASH_HOSTNAME/api/frontend
  url: 'http://localhost:4242/api/proxy',
  // clientKey: 'PROXYKEY',
  clientKey: 'default:development.unleash-insecure-api-token',
  refreshInterval: 15,
  appName: 'your-app-name',
  environment: 'dev',
};

function App() {

  return (
    <FlagProvider config={config}>
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </FlagProvider>
  );
}

export default App;
