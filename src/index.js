import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Maintenance_Alert from './Maintence_Alert'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Maintenance_Alert />
  </React.StrictMode>
);

