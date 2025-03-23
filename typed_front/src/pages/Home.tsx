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
    if (loading) return;
    setLoading(true);

    try {
      if (!searchQuery.trim()) {
        const searchResults = await getProducts();
        setProducts(searchResults);
        setError("");
      } else {
        const searchResults = await searchProducts(searchQuery);
        setProducts(searchResults);
        setError("");
      }
    } catch (err) {
      console.log("Failed to search movies");
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={(e) => handleSearch(e)} className="search-form">
        <input
          type="text"
          placeholder="Search for products..."
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
          {products.map((product) => {
            return (
              // key for update specific component
              <ProductCard product={product} key={product.id} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
