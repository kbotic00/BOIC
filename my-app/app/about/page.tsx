import Image from 'next/image'

import AboutBox from './AboutBox'
import FaqsBox from './FaqsBox'
import MoreQBox from './MoreQBox'


const About=()=> {
  return (
    <>
      <div className='text-black'>
      <AboutBox/>
      <FaqsBox/>
      <MoreQBox/>
      </div>
    
    </>
  )
}
export default About;