import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { IoIosArrowDropdown } from "react-icons/io";
import Title from '../components/Title';
import product from './product';
import ProductItem from '../components/ProductItem';

const collection = () => {
  const { products , search ,showSearch} = useContext(ShopContext);
  const [showFilter,setshowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')

  useEffect(()=>{
    console.log(category);

  },[category])

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }

    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();
    
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));

    }

    if (subCategory.length > 0 ) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))

    }

    setFilterProducts(productsCopy)
}
 
     const sortProduct = () => {

      let fpCopy = filterProducts.slice();
      switch (sortType) {
        case 'low-high' :
          setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
          break;

          case 'high-low':
            setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
            break;

          default:
            applyFilter();
            break;
      }
     }
     

  useEffect(()=>{
    applyFilter();

  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();

  },[sortType])

  return (
    <div className='flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10'>
      {/* filter Options */}
      <div className='min-w-60'>
        <p  onClick={()=>setshowFilter(!showFilter)} className='flex items-center gap-2 my-2 text-xl cursor-pointer'>FILTERS
        <IoIosArrowDropdown />

        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex-gap-2'>
              <input className='' type="checkbox" value={'Festive Collection'} onChange={toggleCategory}/> Festive Collection
            </p>
            <p className='flex-gap-2'>
              <input className='' type="checkbox" value={'Handmade'} onChange={toggleCategory}/> Handmade 
            </p>
            <p className='flex-gap-2'>
              <input className='' type="checkbox" value={'Bandarwal'} onChange={toggleCategory}/> Bandarwal
            </p>

          </div>

        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex-gap-2'>
              <input className='' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className='flex-gap-2'>
              <input className='' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className='flex-gap-2'>
              <input className='' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>

          </div>

        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between mb-4 text-base sm:text-2xl'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='px-2 text-sm border-2 border-gray-300'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>

        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-flow-cols-4 gap-y-6'>
          {
            filterProducts.map((item, index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }

        </div>

      </div>
    
    </div>
  )
}

export default collection