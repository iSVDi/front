import React from "react";
import { useState, useEffect } from "react";
import { Product } from "../models/product";
import { useSelector } from "react-redux";
import { StoreState } from "../state/store";
import { getProducts, searchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const favoritesIds = useSelector(
    (state: StoreState) => state.favorites.ids
  );

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = (await getProducts()).filter((product) =>
          favoritesIds.includes(product.id)
        );
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
  }, [favoritesIds]);

  return (
   <div>
     <div className="movies-grid">
      {products.map((product) => {
        return (
          // key for update specific component
          <ProductCard product={product} key={product.id} />
        );
      })}
    </div>
   </div>
  );
};

export default Favorites;
