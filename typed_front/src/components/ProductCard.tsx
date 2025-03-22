import React from "react";
import "../css/ProductCard.css";
import { Product } from "../models/product";

interface Props {
  product: Product;
  isFavorite: (productId: number) => boolean;
  addToFavorites: (productId: number) => void;
  removeFromFavorites: (productId: number) => void;
}

const ProductCard = ({
  product,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}: Props) => {
  const favorite = isFavorite(product.id);

  function onFavorite(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (isFavorite(product.id)) {
      console.log("product was in favorites");
      removeFromFavorites(product.id);
    } else {
      console.log("product is adding to favorites");
      addToFavorites(product.id);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={product.thumbnail} alt={product.title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={(e) => onFavorite(e)}
          >
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
