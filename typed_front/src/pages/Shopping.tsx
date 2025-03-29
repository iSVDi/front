import React, { useEffect, useState } from "react";
import { Product } from "../models/product";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../state/store";
import { increment, decrement } from "../state/shopping/shoppingSlice";
import ShoppingCard from "../components/ShoppingCard";
import { getProducts } from "../services/api";

const Shopping: React.FC = () => {
  const [shoppingProducts, setShoppingProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const shoppingItems = useSelector(
    (state: StoreState) => state.shoppings.items
  );

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const itemsIds = shoppingItems.map((item) => item.id);
        console.log("itemsId: ", itemsIds)
        const products = (await getProducts()).filter((item) =>
          itemsIds.includes(item.id)
        );
        setShoppingProducts(products);
        setLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [shoppingItems]);

  return (
    <div>
      {shoppingProducts.map((product) => {
        return <ShoppingCard product={product} key={product.id} />;
      })}
    </div>
   
  );
};

export default Shopping;
