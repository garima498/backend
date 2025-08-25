import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../../frontend/src/assets/assets'
import { CiCirclePlus } from "react-icons/ci";
import { FaListCheck } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink className="flex items-center gap-3 px-3 py-2 border border-gray-300 bordr-r-0 rounded-1" to="/add">
             <CiCirclePlus />
              <p className='hidden md:block'> Add Items</p>
            </NavLink>

            <NavLink className="flex items-center gap-3 px-3 py-2 border border-gray-300 bordr-r-0 rounded-1" to="/list">
            <FaListCheck />
              <p className='hidden md:block'> List Items</p>
            </NavLink>

            <NavLink className="flex items-center gap-3 px-3 py-2 border border-gray-300 bordr-r-0 rounded-1" to="/orders">
            <FaListCheck />
              <p className='hidden md:block'> Orders</p>
            </NavLink>
            
            
        </div>

    </div>
  )
}

export default Sidebar