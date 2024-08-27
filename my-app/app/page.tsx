import Brandbox from "./components/Brandbox"
import Productlist from "./components/Productlist"
import Slider from "./components/Slider"



const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
     
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-white">
        <h1 className="text-2xl font-bold mb-4"> Dropping soon</h1>
        <Productlist/>
        <h1 className="text-2xl font-bold mb-4"> Najnovije</h1>
        <Productlist/>
      </div>
      <Brandbox/>
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-white">
        <h1 className="text-2xl font-bold mb-4"> Najprodavanije</h1>
        <Productlist/>
        <h1 className="text-2xl font-bold mb-4"> Featured Product</h1>
        <Productlist/>
      </div>
    </div>
    
  )
}

export default HomePage