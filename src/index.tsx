import React           from 'react';
import ReactDOM        from 'react-dom/client';
import './index.css';
import App             from './App';
import reportWebVitals from './reportWebVitals';
import { urlProvider } from './api/UrlProviderInstanceManager';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Print to the console the 2 urls
// If you try to run the production build (npm run build:prod) you'll see different urls logged,
// following the .env file
console.log('Domain url: ', urlProvider.getDomainUrl());
console.log('Auth provider url: ', urlProvider.getApUrl());

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
