import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHeader/>
    <div className='Header-space'></div>
    <App />
    <AppFooter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
