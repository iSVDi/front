import "../css/Favorites.css";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

function Favorites() {
  const { favorites } = useProductContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((product) => (
            // key for update specific component
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  } else
    return (
      <div className="favoutites-empty">
        <h2>No favoutites Movies yet</h2>
        <p>Start adding movies to your favoutites and they will appear here</p>
      </div>
    );
}

export default Favorites;
