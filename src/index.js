import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Maintenance_Alert from './Maintence_Alert'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from './Components/resume';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about_me' element={<Maintenance_Alert />} />
      </Routes>

    </Router>

    {/* <Maintenance_Alert /> */}
  </React.StrictMode>
);

