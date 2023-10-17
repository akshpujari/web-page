import Dashboard from "./components/dashboard/dashboard";
import Menu from "./components/menu/menu";
import React from 'react';
import classes from './App.module.css';
function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div className={classes.menu}>
        <Menu />
      </div>
      <div className={classes.dashboard}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
