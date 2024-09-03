"use client"
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className="w-[130px] lg:w-[170px]  gap-y-124 justify-between flex-wrap relative rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Link href={`/product/${product.id}`} className="full flex flex-col sm:w-[45%] lg:w-[22%]">
        <div>
          {/* slika */}
          <div className="relative w-[130px] lg:w-[170px] h-[163px]">
            <Image
              src={product.mainPhoto?.url || "/placeholder.png"}
              alt={product.name}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-3xl z-10 hover:opacity-0 transition-opacity easy duration-500 w-[215px] h-[214px]"
            />
            <Image
              src={product.mainPhoto?.url || "/placeholder.png"}
              alt={product.name}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-2xl w-[215px] h-[214px] bg-slate-200"
            />
          </div>
          <div className="h-20 flex-col justify-start items-start gap-2 inline-flex bg-slate- w-[209px] px-2 py-1">
            <div className="flex-col justify-start items-start flex">
              <div className="text-center text-[#212121] text-sm font-semibold">
                {product.name}
              </div>
              <div className="text-center text-[#7a7981] text-xs font-medium ">
                {product.shortDescription}
              </div>
            </div>
            <div className="relative w-[209px] py-2 flex flex-row">
              <div className="left-1 absolute text-center text-[#212121] text-xs font-semibold">
                € {product.price.toFixed(2)}
              </div>
              <div className="left-[55px] absolute text-center text-[#7a7981] text-xs font-medium ">
                ({(product.price * 7.53).toFixed(2)} kn)
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
