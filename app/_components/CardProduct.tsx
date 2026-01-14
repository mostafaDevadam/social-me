"use client";

import React from 'react'
import { PRODUCT_TYPE } from '../_types/types';
import ProductDialog from './ProductDialog';
import { removeProductAction, updateProductAction } from '../actions/product.actions';
import RemoveProductButton from './RemoveProductButton';
import AddToCartButton from './AddToCartButton';
import { addProductToCartAction } from '../actions/cart.actions';

type CardProductProps = {
  product: PRODUCT_TYPE
  userId: any
}
const CardProduct = ({ product, userId }: CardProductProps) => {
  return (
    <div className='bg-white  rounded-lg shadow-md mt-3 flex flex-col gap-2 w-64 rounded-t-lg'>
      <div className='bg-blue-500 h-40 w-full rounded-t-lg'>

      </div>
      <div className='flex flex-row justify-start pe-3 pt-2 text-start px-2'>
        Name: {product?.name}
      </div>
      <div className='flex flex-row justify-start pe-3 pt-2 text-start px-2 border-t py-2'>
        Price: {product?.price} <span className='ms-1 capitalize'>{product?.currency}</span>
      </div>

      {userId === product?.user && (
        <div className={'flex flex-row pe-3 pt-2 text-start px-2 border-t py-2 justify-between'}>
          
          <ProductDialog action={updateProductAction} userId={userId} type_action={"edit"} product={product} />

          <RemoveProductButton action={removeProductAction} productId={product?._id} />
        </div>
      )}

      {
        userId !== product?.user &&
        <div className={'flex flex-row pe-3 pt-2 text-start px-2 border-t py-2 justify-end'}>
           <AddToCartButton action={addProductToCartAction} productId={product?._id}  />
        </div>
      }




    </div>
  )
}

export default CardProduct