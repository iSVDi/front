import React from "react";
import { Product } from "../models/product";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../state/shopping/shoppingSlice";
import { StoreState } from "../state/store";

interface Props {
  product: Product;
}

const ShoppingCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const shoppingItems = useSelector(
      (state: StoreState) => state.shoppings.items
    );

    function getCount(): number {
        return shoppingItems.find((item) => item.id == product.id)?.count ?? 0
    }

  const minusHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(decrement(product.id))
  };

  const plusHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(increment(product.id))
  };

  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <div>
        <button onClick={(e) => minusHandler(e)}>minus</button>
        <p>{getCount()}</p>
        <button onClick={(e) => plusHandler(e)}>plus</button>
      </div>
    </div>
  );
};

export default ShoppingCard;
