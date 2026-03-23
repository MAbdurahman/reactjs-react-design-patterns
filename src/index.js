import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import ContextProvider from './4-provider-pattern/APIContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);