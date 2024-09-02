"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchProducts } from "../../lib/contentful"; // Ensure fetchProducts is correctly implemented
import Producttext from "../components/Producttext";

// Image data array
const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

// Define the Product type interface
interface Product {
  id: string;
  name: string;
  shortDescription: string;
}

const SinglePage = () => {
  const [products, setProducts] = useState<Product[]>([]); // State for products
  const [index, setIndex] = useState(0); // State for current image index
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState<string | null>(null); // State for error handling

  // Fetch products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(
          fetchedProducts.map((product: any) => ({
            id: product.sys.id, // Adjust this based on your Contentful structure
            name: product.name || "Unnamed Product",
            shortDescription: product.shortDescription || "No description available",
          }))
        );
        setLoading(false);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="px-2 md:px-2 lg:px-12 xl:px-16 2xl:px-20 relative flex top-10 pb-5 mb-20 flex-col lg:flex-row gap-16 bg-white text-black">
      {/* Image Container */}
      <div className="w-full lg:w-1/2 lg:sticky top-10 h-max">
        <div className="h-[500px] relative">
          <Image
            src={images[index].url}
            alt={`Image ${index + 1}`}
            fill
            sizes="50vw"
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between gap-4 cursor-pointer">
          {images.map((img, i) => (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8"
              key={img.id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={img.url}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>

      </div>
      <div className="w-1/2">
      <Producttext></Producttext>
      </div>
      
    </div>
  );
};

export default SinglePage;