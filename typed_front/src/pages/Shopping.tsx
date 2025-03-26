import React from "react";
import { Product } from "../models/product";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../state/store";
import { increment, decrement } from "../state/shopping/shoppingSlice";

const Shopping: React.FC = () => {
  const shoppingItems = useSelector(
    (state: StoreState) => state.shoppings.items
  );

  console.log(shoppingItems.map(item => item.id))
  return (
    <div>
      {shoppingItems.map((item) => (
        <li>{item.id}</li>
      ))}
    </div>
  );
};

export default Shopping;
