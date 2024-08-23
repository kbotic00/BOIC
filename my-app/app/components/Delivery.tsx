import Image from "next/image"
const Delivery = () => {
    return (
        <div id="boxOne" className="bg-gray-300">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 p-4">
          <div className="flex items-center gap-4 w-100">
            <div className="w-6 h-6 md:w-auto md:h-auto">
              <img src="./u_box.png" className="w-full h-full object-contain w-22 h-22" />
            </div>
            <div className=" ">
              <div className="text-black text-left font-semibold text-lg">Delivery via DPD</div>
              <div className="text-black text-opacity-80 text-left font-semibold text-sm">within 4-6 business days</div>
            </div>
          </div>
          <div className="flex items-center gap-4 w-100">
            <div className="w-6 h-6 md:w-auto md:h-auto">
              <img src="./u_sync.png" className="w-full h-full object-contain w-22 h-22" />
            </div>
            <div className="">
              <div className="text-black text-left font-semibold text-lg">Free delivery</div>
              <div className="text-black text-opacity-80 text-left font-semibold text-sm">for orders over 60 euros</div>
            </div>
          </div>
          <div className="flex items-center gap-4 w-100">
            <div className="w-6 h-6 md:w-auto md:h-auto">
              <img src="./u_truck.png" className="w-full h-full object-contain w-22 h-22" />
            </div>
            <div className="">
              <div className="text-black text-left font-semibold text-lg">Free return</div>
              <div className="text-black text-opacity-80 text-left font-semibold text-sm">within 30 days maximum</div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
  
  export default Delivery
