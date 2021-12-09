import React from "react"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Birds from './components/Birds';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <h1>Hello from Rails</h1>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/birds" element={<Birds/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
