"use client"

import Image from "next/image"


const Cartmodal = () => {

    const cartItems=true
    return (

      <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white z-20 text-black top-12 right-0 flex flex-col'>
       {!cartItems?(
        <div className="">Cart is Empty</div>
       ):(
          <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
            <Image src="https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width={72} height={96} className="object-cover rounded-md"></Image>
              <div className="flex flex-col justify-between w-full">
                {/*Top */}
                <div className="">
                  {/*Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="fon">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-md">$49</div>
                  </div>
                  {/*Description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>

                {/*Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div> 
            </div>
            </div>
            <div className="flex gap-4">
            <Image src="https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width={72} height={96} className="object-cover rounded-md"></Image>
              <div className="flex flex-col justify-between w-full">
                {/*Top */}
                <div className="">
                  {/*Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="fon">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-md">$49</div>
                  </div>
                  {/*Description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>

                {/*Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div> 
            </div>
            </div>
          </div>
        <div className=""> 
          <div className="flex items-center justify-between font-semibold">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-blue-500">$49</span>
          </div>
          <p className="text-gray-500 text-sm mt-2 mb-4">
            bezvezni tekst aaaahahahahahhahaah
          </p>
          <div className="flex justify-between text-sm">
            <button className="rounded-md py-3 px-4 ring-gray-300">View Cart</button>
            <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
          </div>
        </div>
        </>
       )}
       </div>
    )

  }
  
  export default Cartmodal