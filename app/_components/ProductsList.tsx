"use client";

import React from 'react'
import { PRODUCT_TYPE } from '../_types/types';
import CardProduct from './CardProduct';

type ProductsListProps = {
  products: PRODUCT_TYPE[]
  userId: any
}
const ProductsList = ({ products, userId }: ProductsListProps) => {
  return (
    <div className='space-y-4 w-full flex flex-row flex-wrap gap-10 border px-2 pb-2'>
      {products.map((product: PRODUCT_TYPE) => (
        <div key={product?._id} >
          <CardProduct product={product} userId={userId} />
          
        </div>
        
  ))
}
    </div >
  )
}

export default ProductsList