import React from "react";
import "./App.css";
import LoginRegester from "./Pages/LoginRegester";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import './Styles/allstyles.css'

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
