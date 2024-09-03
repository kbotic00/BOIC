"use client";
import React from "react";
import Product from "./Product";
import { Product as ProductType } from "./Product"; // Ensure this path is correct

interface ProductlistProps {
  products: ProductType[];
}

const Productlist: React.FC<ProductlistProps> = ({ products }) => {
  return (
    <>
      <div className="hidden md:grid md:grid-cols-5 md:pt-5 md:pb-9 md:pl-8 md:justify-center md:gap-1">
        {products.slice(0, 5).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="hidden sm:grid sm:grid-cols-3 sm:pt-5 sm:pb-7 sm:pl-8 sm:justify-center sm:gap-1 md:hidden lg:hidden">
        {products.slice(0, 3).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="grid grid-cols-2 justify-center items-center py-5 pl-[6%] gap-3 sm:hidden mx-auto">
        {products.slice(0, 2).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Productlist;
