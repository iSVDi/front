import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes, Router, Link, BrowserRouter } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  // return <Home></Home>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
