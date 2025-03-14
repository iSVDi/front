import ProductCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getProducts } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [laoding, setLoading] = useState(true);

  //TODO? read how it works
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        console.log("Before load movies");
        const popularMovies = await getProducts();
        console.log(popularMovies);
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

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
          <ProductCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
