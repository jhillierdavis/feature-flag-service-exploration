// Avoid error: 'React' must be in scope when using JSX  react/react-in-jsx-scope
import React from 'react';
import { useFlag } from '@unleash/proxy-client-react';

export default function  Header() {

    const headerEnabled = useFlag('header-enabled');
    // onst headerEnabled = true

    if (headerEnabled) {
        return (
            <div>
                <h1>Welcome to a Unleash and ReactJS example</h1>
                <h2>Hope you enjoy using Feature Flags!</h2>
            </div>
        )
    } 
}