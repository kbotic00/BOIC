"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "../../lib/contentful";

interface Product {
  id: string;
  name: string;
  shortDescription: string;
  color: string;
  price: number;
  brand: string;
  description: string;
  gender: string;
  mainPhoto?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

const defaultImage = "/path/to/default-image.png"; // Replace with the actual path to your default image

const ListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("default");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        const mappedProducts = fetchedProducts.map((product: any) => ({
          id: product.sys.id,
          name: product.name || "Unnamed Product",
          shortDescription: product.shortDescription || "No description available",
          color: product.color || "No color available",
          price: product.price ? parseFloat(product.price) : 0, // Ensure price is a number
          brand: product.brand || "No brand available",
          description: product.description || "No description available",
          gender: product.gender,
          mainPhoto: product.mainPhoto?.url,
          image2: product.image2?.url,
          image3: product.image3?.url,
          image4: product.image4?.url,
        }));
        setProducts(mappedProducts);
        setFilteredProducts(mappedProducts); 
        setLoading(false);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [minPrice, maxPrice, selectedColor, selectedBrand, selectedGender, sortOrder]);

  const filterProducts = () => {
    let filtered = [...products];

    // Filter cijena
    if (minPrice !== null) {
      filtered = filtered.filter(product => product.price >= minPrice);
    }
    if (maxPrice !== null) {
      filtered = filtered.filter(product => product.price <= maxPrice);
    }

    // Filter boja
    if (selectedColor && selectedColor !== "default") {
      filtered = filtered.filter(product => product.color === selectedColor);
    }

    // Filter brend
    if (selectedBrand && selectedBrand !== "default") {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Filter spol
    if (selectedGender && selectedGender !== "default") {
      filtered = filtered.filter(product => product.gender === selectedGender);
    }

    // Sortiranje
    if (sortOrder === "maxtop") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "lowtop") {
      filtered.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-customGray text-black">
      <div className="mt-12 flex justify-between">
        <div className="flex gap-6 pl-5 flex-wrap r">
          {/* Filter and Sort Inputs */}
          <select
            name="color"
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200"
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="default">Boja</option>
            <option value="bijela">bijela</option>
            <option value="žuta">žuta</option>
            <option value="ružičasta">roza</option>
            <option value="crvena">crvena</option>
            <option value="narančasta">narančasta</option>
            <option value="zelena">zelena</option>
            <option value="plava">plava</option>
            <option value="crna">crna</option>
          </select>

          <select
            name="brand"
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200"
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="default">Brand</option>
            <option value="adidas">adidas</option>
            <option value="converse">converse</option>
            <option value="nike">nike</option>
            <option value="puma">puma</option>
            <option value="vans">vans</option>
          </select>

          <select
            name="type"
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="default">Spol</option>
            <option value="muške">muške</option>
            <option value="ženske">ženske</option>
          </select>

          <input
            type="number"
            name="min"
            placeholder="Min Price"
            className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
            onChange={(e) => setMinPrice(e.target.value ? parseInt(e.target.value) : null)}
          />
          <input
            type="number"
            name="max"
            placeholder="Max Price"
            className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
            onChange={(e) => setMaxPrice(e.target.value ? parseInt(e.target.value) : null)}
          />

          <select
            name="sort by"
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Sort by zadano</option>
            <option value="maxtop">Price (max top)</option>
            <option value="lowtop">Price (min top)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center items-center py-5 pl-[9%] gap-3 sm:grid-cols-3 sm:mt-5 sm:pb-7 sm:pl-[9%] sm:justify-center sm:gap-1 sm:gap-y-5 gap-y-4 md:grid-cols-5 md:mt-10 md:pb-9 md:pl-4 md:justify-center md:gap-2 md:gap-y-8">
        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="w-[150px] sm:w-[130px] lg:w-[170px] flex gap-x-8 gap-y-16 justify-between flex-wrap relative rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <Link href={product.id} className="full flex flex-col sm:w-[45%] lg:w-[22%]">
                <div className="mb-6">
                  <div className="relative w-[150px] sm:w-[130px] lg:w-[170px] h-[140px]">
                    <Image
                      src={product.mainPhoto || defaultImage}
                      alt={product.name || "Product Image"}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-3xl z-10 hover:opacity-60 transition-opacity ease duration-500"
                    />
                  </div>
                  <div className="h-15 flex-col justify-start items-start gap-2 inline-flex bg-slate- w-[209px] px-2 py-1">
                    <div className="flex-col justify-start items-start flex">
                      <div className="text-center text-[#212121] text-sm font-semibold font-['Montserrat']">{product.name}</div>
                      <div className="text-center text-[#7a7981] text-xs font-medium font-['Montserrat']">{product.gender} tenisice</div>
                    </div>
                    <div className="relative w-[209px] flex flex-row">
                      <div className="left-1 absolute text-center text-[#212121] text-xs font-semibold font-['Montserrat']">€ {product.price}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          !loading && <p>No products available.Try adjusting your filters.</p>
        )}
      </div>
    </div>
  );
};

export default ListPage;
