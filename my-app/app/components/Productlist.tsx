"use client"
import Product from "./Product"

const Productlist =()=>{
 return(
    <>
    <div className="hidden md:grid md:grid-cols-5 md:py-5 md:pl-8 md:justify-center md:gap-1 ">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>

    <div className="hidden sm:grid sm:grid-cols-3 sm:py-5 sm:pl-8 sm:justify-center sm:gap-1 md:hidden lg:hidden  ">
        <Product/>
        <Product/>
        <Product/>
    </div>

    <div className="grid grid-cols-2 justify-center items-center py-5 pl-[8%] gap-3 sm:hidden mx-auto">
        <Product />
        <Product />
    </div>

    </>
    
 )
}

export default Productlist