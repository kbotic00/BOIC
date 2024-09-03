"use client"; // Ensure this runs on the client-side

import { useState, useEffect } from "react";
import Image from "next/image";
import Povrat from "../components/Povrat";
import { fetchProductById } from "@/lib/contentful";

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

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(id);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const images = [
    product.mainPhoto?.url,
    product.image2?.url,
    product.image3?.url,
    product.image4?.url,
  ].filter((url): url is string => !!url); // Filter out undefined values

  return (
    <div className="px-2 md:px-2 lg:px-12 xl:px-16 2xl:px-20 relative flex top-10 pb-5 mb-20 flex-col lg:flex-row gap-16 bg-customGray text-black">
      <div className="w-full lg:w-1/2 lg:sticky top-10 h-max">
        <div className="h-[500px] relative">
          <Image
            src={images[index]}
            alt={`Product image ${index + 1}`}
            fill
            sizes="50vw"
            className="object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between gap-4 cursor-pointer mt-8">
          {images.map((url, i) => (
            <div
              className="w-1/4 h-32 relative gap-4"
              key={i}
              onClick={() => setIndex(i)}
            >
              <Image
                src={url}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-medium pt-4">{product.name}</h1>
          <p className="text-gray-500">{product.shortDescription}</p>
          <div className="h-[2px] bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-700 ">${product.price}</h3>
          </div>
          <div className="h-[2px] bg-gray-100"></div>
          <div className="text-sm">
            <h4 className="font-bold mb-4">Opis</h4>
            <p>{product.description}</p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4 text-gray-500">Detalji:</h4>
            <p className="px-3">
              Regular fit
              <br /> Lace closure
              <br /> Suede upper
              <br /> Gum rubber outsole
              <br /> Enjoy the comfort and performance of OrthoLite® sockliner
              <br /> Soft feel
            </p>
          </div>
          <div className="text-sm">
            <Povrat />
          </div>
        </div>
      </div>
    </div>
  );
}
