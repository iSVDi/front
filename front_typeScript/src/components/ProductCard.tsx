import "../css/ProductCard.css";
import { useProductContext } from "../context/ProductContext";

function ProductCard({ product }) {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useProductContext();
  const favorite = isFavorite(product.id);

  function onFavorite(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(product.id);
    else addToFavorites(product);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={product.thumbnail} alt={product.title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavorite}
          >
            ♡
          </button>
        </div>
      </div>
      <div className="movie-title">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
