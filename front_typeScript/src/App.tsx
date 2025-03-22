import React from "react"

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
