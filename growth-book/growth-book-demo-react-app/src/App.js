import React from 'react'
import logo from './logo.svg';
import './App.css';

// import { GrowthBook, GrowthBookProvider, useFeature } from "@growthbook/growthbook-react";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { useEffect } from "react";

import gblogo from './growth-book-logo.png'

// Create a GrowthBook instance

const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    console.log({
      experimentId: experiment.key, 
      variationId: result.variationId
    })
  }
});

// Load feature definitions from API
// In production, we recommend putting a CDN in front of the API endpoint
const FEATURES_ENDPOINT = "http://localhost:3100/api/features/key_prod_9319e6633ec1f112";

/*
fetch(FEATURES_ENDPOINT)
  .then((res) => res.json())
  .then((json) => {
    growthbook.setFeatures(json.features);

    if (growthbook.isOn("imageswitch")) {
      console.log("Feature 'imageSwitch' is On")
    } else {
      console.log("Feature 'imageSwitch' is Off")
    }
  })
  .catch(() => {
    console.log("Failed to fetch feature definitions from GrowthBook");
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
  });
*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          // Use GB feature flag to switch between logos (GB logo & default)
          imageSwitch ? ( <img src={gblogo} className="App-logo" alt="logo" /> ) : ( <img src={logo} className="App-logo" alt="logo" /> )
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

export default App;
*/

export default function App() {
  useEffect(() => {
    // Load feature definitions from GrowthBook API
    fetch(FEATURES_ENDPOINT)
      .then((res) => res.json())
      .then((parsed) => {
        growthbook.setFeatures(parsed.features);
        if (growthbook.isOn("imageswitch")) {
          console.log("Feature 'imageSwitch' is On")
        } else {
          console.log("Feature 'imageSwitch' is Off")
        }
      });

    // Set user attributes for targeting (from cookie, auth system, etc.)
    growthbook.setAttributes({
      // id: "123",
      // company: "acme",
    });
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <div className="App">
      <header className="App-header">        
        {
          // Use GB feature flag to switch between logos (GB logo & default)
          growthbook.isOn("imageswitch") ? ( <img src={gblogo} className="App-logo" alt="logo" /> ) : ( <img src={logo} className="App-logo" alt="logo" /> )
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
    </GrowthBookProvider>
  );
}