import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Anime from "./components/Anime";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="anime" element={<Anime />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
