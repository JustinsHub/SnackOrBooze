import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import Routes from './Routes'
import SnackWrapper from './SnackWrapper'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SnackWrapper>
        <NavBar />
        <Routes/>
      </SnackWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
