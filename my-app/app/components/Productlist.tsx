"use client"
import Product from "./Product"

const Productlist =()=>{
 return(
    <>
    <div className="hidden md:grid md:grid-cols-5 md:pt-5 md:pb-9 md:pl-8 md:justify-center md:gap-1 bg-slate-400 ">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>

    <div className="hidden sm:grid sm:grid-cols-3 sm:pt-5 sm:pb-7 sm:pl-8 sm:justify-center sm:gap-1 md:hidden lg:hidden bg-slate-500  ">
        <Product/>
        <Product/>
        <Product/>
    </div>

    <div className="grid grid-cols-2 justify-center items-center py-5 pl-[6%] gap-3 sm:hidden mx-auto bg-slate-500">
        <Product />
        <Product />
    </div>

    </>
    
 )
}

export default Productlist