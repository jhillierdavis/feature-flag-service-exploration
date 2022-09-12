import logo from './logo.svg';
import './App.css';
// Use Launch Darkly service for feature flags
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk' 
import ldlogo from './launch-darkly-logo.png'

function App() {
  const { imageSwitch } = useFlags()

  return (
    <div className="App">
      <header className="App-header">
        {
          // Use LD feature flag to switch between logos (LD logo & default)
          imageSwitch ? ( <img src={ldlogo} className="App-logo" alt="logo" /> ) : ( <img src={logo} className="App-logo" alt="logo" /> )
        }
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
  clientSideID: 'TODO: Add Launch Darkly ID',
  options: {
    bootstrap: 'localStorage'
  },
})(App);
