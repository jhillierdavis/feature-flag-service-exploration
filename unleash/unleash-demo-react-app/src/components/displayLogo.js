// Avoid error: 'React' must be in scope when using JSX  react/react-in-jsx-scope
import React from 'react';

import { useFlag } from '@unleash/proxy-client-react';

import logo from '../logo.svg'
import unleashLogo from '../unleash-logo.svg'

export default function DisplayLogo() {
  // Boolean on/off flags
  const logoSwtichEnabled =  useFlag("logo-switch-enabled")

  if (logoSwtichEnabled) {
    return <img src={unleashLogo} className="App-logo" alt="logo" /> 
  } else {
    return <img src={logo} className="App-logo" alt="logo" /> 
  }
}
