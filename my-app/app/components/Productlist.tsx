"use client"
import Product from "./Product"

const Productlist =()=>{
 return(
    <>
    <div className=" hidden md:grid grid-cols-5 py-5 pl-8 justify-center gap-1 ">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
    <div className=" grid grid-cols-3 md:hidden py-5 px-7 justify-center gap-2 ">

        <Product/>
        <Product/>
        <Product/>
    </div>
    </>
    
 )
}

export default Productlist