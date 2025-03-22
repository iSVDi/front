import { useState, useEffect } from "react";
import { Product } from "../models/product";
import { getProducts, searchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<number[]>([]);

  //TODO? read how it works
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Failed load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchProducts(searchQuery);
      setProducts(searchResults);
      setError("");
    } catch (err) {
      console.log("Failed to search movies");
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (productId: number) => {
    setFavorites((prev) => [...prev, productId]);
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites((prev) => prev.filter((id) => id !== productId));
  };

  const isFavorite = (productId: number) => {
    return favorites.some((id) => id === productId);
  };

  return (
    <div className="home">
      <form onSubmit={(e) => handleSearch(e)} className="search-from">
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
          {products.map((product) => (
            // key for update specific component
            <ProductCard
              product={product}
              isFavorite={isFavorite}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              key={product.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
