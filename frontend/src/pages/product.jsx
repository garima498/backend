import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';


const product = () => {  
  const {productId} = useParams();
  const {products, currency,addTOCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')
  

  const fetchProductData = async () => {

        products.map((item)=>{
          if (item._id === productId) {
            setProductData(item)
            setImage(item.image[0])
            return null;

          }
        })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId])
  return productData ? (
    <div className='pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100'>
      {/* ------------------Product Data -----------------*/}

      <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
        {/* -------------Product Images--------------- */}
        <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm-overflow-y-scroll ustify-between sm:justify-normal sm:w-[18.7%] w-full'> 
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />

                ))
              } 
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src="{image}" alt="" />

          </div>

        </div>
        {/* --------- Product Info ------------ */}
        <div className='flex-1'>
          <h1 className='mt-2 text-2xl font-medium'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
          <svg stroke="currentColor" fill="orange" stroke-width="0" viewBox="0 0 576 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
          <svg stroke="currentColor" fill="orange" stroke-width="0" viewBox="0 0 576 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
          <svg stroke="currentColor" fill="orange" stroke-width="0" viewBox="0 0 576 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
          <svg stroke="currentColor" fill="orange" stroke-width="0" viewBox="0 0 576 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
          <svg stroke="currentColor" fill="orange" stroke-width="0" viewBox="0 0 576 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
          <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'> 
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.size.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100`} key={index}>{item}</button>
              ))}

            </div>

          </div>
          <button onClick={()=>addTOCart(productData._id,size)} className='px-8 py-3 text-sm text-white bg-black active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500' >
            <p>100% Original product </p>
            <p>Return is available but you need to bear courier charges</p>
            <p>No cash on delivery</p>
            <p></p>
          </div>

        </div>

      </div>
      {/* -----------Description & Review Section---------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='px-5 py-3 text-sm border'>Description</b>
          <p className='px-5 py-3 text-sm border'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 px-6 py-6 text-gray-500 border'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident minus sequi totam officiis, animi accusamus beatae quidem velit debitis consectetur tenetur porro illo ab sapiente natus unde nihil? Placeat, delectus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam incidunt aut esse voluptatum provident eaque suscipit illo, accusantium laborum nostrum doloribus sapiente culpa, in quo natus. Minus animi hic illum?</p>
        </div>

      </div>
      {/* ---------- display related product ---------------*/}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}

export default product