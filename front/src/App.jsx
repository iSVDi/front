import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </main>
    </div>
  );
}

export default App;
