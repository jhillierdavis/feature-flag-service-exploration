import React from 'react'
import logo from './logo.svg'
import './App.css'

import { GrowthBook, GrowthBookProvider, useFeature } from "@growthbook/growthbook-react";
import { useEffect } from "react";
import growthBookLogo from './growth-book-logo.png'

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
    // Load feature definitions from API
    // In production, we recommend putting a CDN in front of the API endpoint
    fetch("http://localhost:3100/api/features/key_prod_144d3a5d0a19dc02")
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


  }, [])

  return (
    <GrowthBookProvider growthbook={growthbook}>
    <div className="App">
      <header className="App-header">              
          <img src={logo} className="App-logo" alt="logo" />
        <p>
           TODO
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
    </GrowthBookProvider>
  );
}

export default App