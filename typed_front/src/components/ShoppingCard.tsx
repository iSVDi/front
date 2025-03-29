import React from "react";
import { Product } from "../models/product";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../state/shopping/shoppingSlice";
import { StoreState } from "../state/store";
import "../css/ShoppingCard.css";

interface Props {
  product: Product;
}

const ShoppingCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const shoppingItems = useSelector(
    (state: StoreState) => state.shoppings.items
  );

  function getCount(): number {
    return shoppingItems.find((item) => item.id == product.id)?.count ?? 0;
  }

  const minusHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(decrement(product.id));
  };

  const plusHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(increment(product.id));
  };

  return (
    <div className="shoppping-product">
      <img src={product.thumbnail} alt={product.title} />
      
      <div className="shopping-description">
      <h3>{product.title}</h3>
      <h5>{product.description}</h5>
      </div>
      <div className = "shopping-buttons">
        <button onClick={(e) => minusHandler(e)}>-</button>
        <p>{getCount()}</p>
        <button onClick={(e) => plusHandler(e)}>+</button>
      </div>
    </div>
  );
};

export default ShoppingCard;
