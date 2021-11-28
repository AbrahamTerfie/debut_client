import React from "react";
import Dashboard from "./Pages/Dashboard";
import "./Styles/Styles.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import {
  Finance,
  Humanres,
  Purchase,
  Sales,
  Settings,
  Warehouse,
} from "./Pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path={routes.finance} element={<Finance />} />
        <Route path={routes.sales} element={<Sales />} />
        <Route path={routes.humanres} element={<Humanres />} />
        <Route path={routes.purchase} element={<Purchase />} />
        <Route path={routes.warehouse} element={<Warehouse />} />
        <Route path={routes.settings} element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
