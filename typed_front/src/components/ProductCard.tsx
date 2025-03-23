import React from "react";
import "../css/ProductCard.css";
import { Product } from "../models/product";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteState } from "../state/store";
import { addFavorite, removeFavorite } from "../state/favorites/favoriteSlice";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const favoritesIds = useSelector(
    (state: FavoriteState) => state.favorites.ids
  );
  const dispatch = useDispatch();

  function isFavorite(id: number): boolean {
    return favoritesIds.includes(id);
  }

  function addToFavorites(id: number) {
    dispatch(addFavorite(id));
  }

  function removeFromFavorites(id: number) {
    dispatch(removeFavorite(id));
  }

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
            className={`favorite-btn ${isFavorite(product.id) ? "active" : ""}`}
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
