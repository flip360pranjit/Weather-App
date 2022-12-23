import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router></div>
  );
}

export default App;
