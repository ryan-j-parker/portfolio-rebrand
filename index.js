import React, { StrictMode } from 'react';
import reactDom from 'react-dom/client';
import App from './src/App';
import './index.css';

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
