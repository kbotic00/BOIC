"use client"

import Image from "next/image"
import Filter from "../components/Filter"
import Productlist from "../components/Productlist"

const ListPage = () => {
    return (
      <div className=' px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-white text-black'>
        <div className=" hidden bg-gray-50 p-4 sm:flex justify-between h-64 pl-10">
          <div className="w-2/3 flex flex-col items-center justify-center gap-8">
            <h1 className=" text-xl md:text-4xl font-semibold leading-[32px] md:leading-[48px] text-gray-700">Grab up to 50% off on <br/>selected products</h1>
          </div>
          <div className="relative w-1/3">
            <Image src="/woman.png" alt="" fill className="object-contain"></Image>
          </div>  
        </div>      
      <Filter/>
      <div className=""><Productlist /> <Productlist /> <Productlist /></div>
      {/*Product list*/}
      
      </div>
    )
  }
  
  export default ListPage