import React from 'react'


import { SiTicktick } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";


const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base'>
        
        <div>
        <SiTicktick />
        <p className='font-semibold '>3 Days Return Policy </p>
        <p className='text-gray-400'> We provide 3 days return policy</p>
        </div>
        
        <div>
        <MdSupportAgent />
       
        <p className='font-semibold '>Best Customer Support</p>
        <p className='text-gray-400'> We provide 24/7 customer support</p>
        </div>



    </div>
  )
}

export default OurPolicy