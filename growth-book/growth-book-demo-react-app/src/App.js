import React from 'react'
import './App.css'

// GrowthBook imports
import { GrowthBook, GrowthBookProvider, IfFeatureEnabled, FeatureString } from "@growthbook/growthbook-react";
import { useEffect } from "react";

import Header from './components/header'
import DisplayLogo from './components/displayLogo'

// Create a GrowthBook instance
const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    console.log({
      experimentId: experiment.key, 
      variationId: result.variationId
    })
  }
});

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      // Load feature definitions from API
      // In production, we recommend putting a CDN in front of the API endpoint
      fetch("http://localhost:3100/api/features/key_prod_33f63c0eb9987c9c")
        .then((res) => res.json())
        .then((json) => {
          growthbook.setFeatures(json.features);
        });

      // TODO: replace with real targeting attributes
      growthbook.setAttributes({
        "id": "foo",
        "deviceId": "foo",
        "company": "foo",
        "loggedIn": true,
        "employee": true,
        "country": "foo",
        "browser": "foo",
        "url": "foo"
      })
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <GrowthBookProvider growthbook={growthbook}>
    <div className="App">
      <header className="App-header">    
        <IfFeatureEnabled feature="header-enabled">
          <Header />
        </IfFeatureEnabled>                       
        <p>
        <DisplayLogo />
        </p>
        <FeatureString feature="bottom-text-enabled" default="Edit src/App.js and save to reload." />
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
    </GrowthBookProvider>
  );
}

export default App