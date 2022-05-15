import './App.css';
import pics from './Images/images.js'
import Header from './Components/header'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from './Components/resume';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
