import React from 'react';
import { Button } from 'reactstrap'
import './App.css';
import "animate.css/animate.min.css";
import { Authentication, Landing } from './Pages/inedx';
import { NavBarElement } from './Components/index';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Landing /> */}


      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/debut" element={<NavBarElement />} />
      </Routes>

    </div>
  );
}

export default App;
