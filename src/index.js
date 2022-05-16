import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Maintenance_Alert from './Maintence_Alert'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About_Me from './Components/About_Me/about_me';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/' element={<About_Me />} />
        <Route path='/about_me' element={<App />} />
      </Routes>

    </Router>

    {/* <Maintenance_Alert /> */}
  </React.StrictMode>
);

