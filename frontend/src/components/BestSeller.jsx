import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [BestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))

    },[products])
  return (
    <div className='my-10'>
        <div className='py-8 text-3xl text-center'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ratione, exercitationem eius rerum et iure voluptatibus laboriosam incidunt perferendis ducimus accusamus nostrum consequuntur culpa nihil? Similique, ex quod. Earum, ea.

            </p>
            </div>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
                {
                    BestSeller.map((item,index)=>(
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
                
            </div>
        </div>
  )
}

export default BestSeller