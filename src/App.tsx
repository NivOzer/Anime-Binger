import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import {
  HashRouter as Router,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Anime from "./components/Anime";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime animeName="" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
