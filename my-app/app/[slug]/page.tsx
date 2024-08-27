import Productimages from "../components/Productimages"
import Producttext from "../components/Producttext"

const SinglePage = () => {
    return (
      <div className='px-2 md:px-2 lg:px-12 xl:px-16 2xl:px-20 relative flex top-10 pb-5 mb-20 flex-col lg:flex-row gap-16 bg-white text-black  '>
        {/* image cointainer*/}
        <div className="w-full lg:w-1/2 lg:sticky top-10 h-max">
        <Productimages></Productimages> 

        </div>
        {/* text container*/}
        <div className="w-full lg:w-1/2 ">
        <Producttext/>
        </div>
      </div>
    )
  }
  
  export default SinglePage