// Avoid error: 'React' must be in scope when using JSX  react/react-in-jsx-scope
import React from 'react';

export default function  Header() {
    return (
        <div>
            <h1>Welcome to a GrowthBook and ReactJS example</h1>
            <h2>Hope you enjoy using Feature Flags!</h2>
        </div>
    )
}