import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
        <Navbar></Navbar>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </main>
    </ProductProvider>
  );
}

export default App;
