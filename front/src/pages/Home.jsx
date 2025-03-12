import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "John Wick",
      release_date: "2020",
    },
    {
      id: 2,
      title: "Terminator",
      release_date: "1992",
    },
    {
      id: 1,
      title: "Transformers",
      release_date: "2012",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-from">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            console.log(e);
          }}
        ></input>

        <button type="submit" className="search-buitton">
          {" "}
          Search{" "}
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          // key for update specific component
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
