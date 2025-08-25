import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='w-32 mb-5'  alt="" />
            <p className='w-full text-gray-600 md:w-2/3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia doloribus quaerat, perferendis, vitae non, obcaecati veritatis tempore corporis iure ipsa iste nulla nam atque. Labore ducimus maxime obcaecati exercitationem!
            </p>
        </div>
        <div>
            <p className='mb-5 text-xl font-medium' >COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
        </div>
    <div>
        <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>9602775035</li>
            <li>gmethi123@gmail.com</li>

        </ul>
    </div>
    <div>
        <hr />
        <p className='py-10 text-sm text-center'>Copyright 2024@ forever.com - All Rights Reserved</p>
    </div>
     
    </div>

  )
}

export default Footer