import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Grab the root DOM element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the App inside StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
