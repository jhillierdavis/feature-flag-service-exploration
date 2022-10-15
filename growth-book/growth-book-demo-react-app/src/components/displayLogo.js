// Avoid error: 'React' must be in scope when using JSX  react/react-in-jsx-scope
import React from 'react';
import { IfFeatureEnabled, useFeature } from "@growthbook/growthbook-react";

import logo from '../logo.svg'
import growthBookLogo from '../growthbook-logo.png'

export default function DisplayLogo() {
  // Boolean on/off flags
  const logoSwtichEnabled = useFeature("logo-switch-enabled").on

  if (logoSwtichEnabled) {
    return <img src={growthBookLogo} className="App-logo" alt="logo" /> 
  } else {
    return <img src={logo} className="App-logo" alt="logo" /> 
  }
}
