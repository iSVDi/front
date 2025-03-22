import { Product } from "./models/Product";

const BASE_URL = "https://dummyjson.com";

export const getProducts: () => Promise<Product[]> = async () => {
  const response = await fetch(`${BASE_URL}/products?limit=0`);
  const data = await response.json();
  let products: Product[] = data.products;
  return products;
};

export const searchProducts: (query: string) => Promise<Product[]> = async (
  query: string
) => {
  const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
  const data = await response.json();
  return data.products;
};
