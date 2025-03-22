import { Product, ProductResponseRequest } from "../models/product";

const BASE_URL = "https://dummyjson.com";

export const getProducts: () => Promise<Product[]> = async () => {
  const response = await fetch(`${BASE_URL}/products?limit=0`);
  const data: ProductResponseRequest = await response.json();
  return data.products
};

export const searchProducts = async (query: string) => {
  const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
  const data: ProductResponseRequest = await response.json();
  return data.products;
};
