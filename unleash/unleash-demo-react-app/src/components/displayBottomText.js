// Avoid error: 'React' must be in scope when using JSX  react/react-in-jsx-scope
import React from 'react';

import { useFlag, useVariant } from '@unleash/proxy-client-react';

export default function DisplayBottomText() {
    // Boolean on/off flags
    const bottomTextEnabled =  useFlag("bottom-text-enabled")
    const variant = useVariant("bottom-text-enabled")
  
    // return <p>Edit <code>src/App.js</code> and save to reload.</p>
    const str = JSON.stringify(variant.payload)

    // TODO: extract value
    return str
}
