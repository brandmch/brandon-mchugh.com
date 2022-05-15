import './App.css';
import pics from './Images/images.js'
import Header from './Components/header'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
