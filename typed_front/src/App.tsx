import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Favorites from "./pages/Favorites";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
