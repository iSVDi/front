import React from "react";
import "../css/ProductCard.css";
import { FaHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Product } from "../models/product";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../state/store";
import { addFavorite, removeFavorite } from "../state/favorites/favoriteSlice";
import { increment, decrement } from "../state/shopping/shoppingSlice";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const favoritesIds = useSelector((state: StoreState) => state.favorites.ids);

  const shoppingItems = useSelector(
    (state: StoreState) => state.shoppings.items
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

  function onFavorite(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    e.preventDefault();

    if (isFavorite(product.id)) {
      console.log("product was in favorites");
      removeFromFavorites(product.id);
      console.log(favoritesIds.length);
    } else {
      console.log("product is adding to favorites");
      addToFavorites(product.id);
      console.log(favoritesIds.length);
    }
  }

  function isShopping(id: number): boolean {
    return shoppingItems.filter((item) => item.id === id).length !== 0;
  }

  function onShopping(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    e.preventDefault();

    if (isShopping(product.id)) {
      console.log("Remove from shopping " + product.title);
      dispatch(decrement(product.id));
    } else {
      console.log("Add to shopping " + product.title);
      dispatch(increment(product.id));
      console.log(shoppingItems.length);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={product.thumbnail} alt={product.title} />
        <div className="movie-overlay">
          <span
            className={`favorite-btn ${isFavorite(product.id) ? "active" : ""}`}
            onClick={(e) => onFavorite(e)}
          >
            <FaHeart />
          </span>
          <span
            className={`favorite-btn ${isShopping(product.id) ? "active" : ""}`}
            onClick={(e) => onShopping(e)}
          >
            <FaCartPlus />
          </span>
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
