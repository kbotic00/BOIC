import Delivery from "./Delivery"
import Image from "next/image"

const Footerbar = () => {
    return (
        <div className="bg-black text-white py-20 md:px-8 lg:px-16 xl:32 2xl:px-64 text-sm  ">
        <div className="flex flex-col md:gap-10 mb-10 md:flex-row md:justify-around items-center justify-center gap-8 p-4">
          {/* Column 1 - Informacije */}
          <div className=" w-60 md:w-auto pl-12">
            <h3 className="text-lg font-semibold mb-4 ">Informacije</h3>
            <ul >
              <li className="mb-2">Opći uvjeti</li>
              <li className="mb-2">Politika zaštite privatnosti</li>
              <li className="mb-2">Uporaba kolačića</li>
              <li className="mb-2">Postavke privatnosti</li>
            </ul>
          </div>
      
          {/* Column 2 - Pomoć */}
          <div className=" w-60 md:w-auto pl-12">
            <h3 className="text-lg font-semibold mb-4">Pomoć</h3>
            <ul >
              <li className="mb-2">Dostava</li>
              <li className="mb-2">Povrat</li>
              <li className="mb-2">Priručnici</li>
              <li className="mb-2">Kontakt</li>
            </ul>
          </div>
      
          {/* Column 3 - BOIC */}
          <div className=" w-60 md:w-auto pl-12">
            <h3 className="text-lg font-semibold mb-4">BOIC</h3>
            <ul >
              <li className="mb-2">Naša priča</li>
              <li className="mb-2">Lokacije dućana</li>
              <li className="mb-2">Posao</li>
              <li className="mb-2">Budućnost</li>
            </ul>
          </div>
      
          {/* Column 4 - Social Icons */}
          <div className="flex pl-12 flex-row md:flex-col w-60 md:w-auto ">
            <Image src="/frame 147.png" alt="" width={28} height={28} className="hover:text-white pr-22"></Image>
            <Image src="/frame 148.png" alt="" width={28} height={28} className="hover:text-white"></Image>
            <Image src="/frame 151.png" alt="" width={28} height={28} className="hover:text-white"></Image>
            <Image src="/frame 152.png" alt="" width={28} height={28} className="hover:text-white"></Image>
            
          </div>
        </div>
      
        {/* Copyright Section */}
          <div className="container mx-auto pl-12 w-60 md:text-center pt-6 ">
            <p>© BOIC 2023</p>
          </div>
      </div>
      
    )
  }
  
  export default Footerbar