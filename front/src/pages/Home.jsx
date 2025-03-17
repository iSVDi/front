import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { getMovies, searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //TODO? read how it works
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        console.log("Before load movies");
        const popularMovies = await getMovies();
        console.log(popularMovies);
        setMovies(popularMovies);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Failed load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    // alert(searchQuery);
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log("Failed to search movies");
    } finally {
      setLoading(false);
    }
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

      {error && <div className="error-message"> {error}</div>}

      {loading ? (
        <div className="loading"> Loading... </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            // key for update specific component
            <ProductCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
