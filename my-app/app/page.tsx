"use client";  // Make sure this is at the top of your file

import { useEffect, useState } from "react";
import Brandbox from "./components/Brandbox";
import Productlist from "./components/Productlist";
import Slider from "./components/Slider";
import { fetchProducts } from "../lib/contentful";

interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  mainPhoto?: {
    url: string;
  };
  image2?: {
    url: string;
  };
  image3?: {
    url: string;
  };
  image4?: {
    url: string;
  };
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <div className="text-black max-w-[100%]">
      <Slider />
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-white">
        <h1 className="text-2xl font-bold mb-4">Dropping soon</h1>
        <Productlist products={products.slice(0, 5)} />
        <h1 className="text-2xl font-bold mb-4">Najnovije</h1>
        <Productlist products={products.slice(5, 10)} />
      </div>
      <Brandbox />
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-white">
        <h1 className="text-2xl font-bold mb-4">Najprodavanije</h1>
        <Productlist products={products.slice(10, 15)} />
        <h1 className="text-2xl font-bold mb-4">Featured Product</h1>
        <Productlist products={products.slice(15, 20)} />
      </div>
    </div>
  );
};

export default HomePage;
