import logo from './logo.svg';
import './App.css';
// Use Launch Darkly service for feature flags
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
  );
}

// export default App;

// Wrap application in LD provider
export default withLDProvider ({
  clientSIdeID: 'TODO',
  options: {
    bootstrap: 'localStorage'
  },
})(App);
