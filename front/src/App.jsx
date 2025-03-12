import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const movieNumber = 1;

  return (
    // fragment
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Tims File", release_date: "2024" }} />
      ) : (
        <MovieCard movie={{ title: "Joe Back", release_date: "2030" }} />
      )}
    </>
  );
}

export default App;
