"use client";

import React from 'react'
import { CART_TYPE, PRODUCT_TYPE } from '../_types/types';
import CardProduct from './CardProduct';
import OrderedCartButton from './OrderedCartButton';
import { orderedCartAction } from '../actions/cart.actions';

type CartListProps = {
    cart: CART_TYPE
    userId: any
}
const CartList = ({ cart, userId }: CartListProps) => {
    console.log("cartId:", cart?._id)
    return (
        <div className='space-y-4 w-full flex flex-col flex-wrap gap-10 border px-2 pb-2'>
            {cart.products?.map((product: PRODUCT_TYPE) => (
                <div key={product?._id} className='flex flex-row justify-between mt-5 border rounded-md bg-blue-400 text-white px-2 py-2'>
                    <p>{product?.name}</p>
                    <p>{product?.price}</p>

                </div>

            ))
            }

            <p className='text-start'>
                Total Price: {cart?.total_price}
            </p>

            <OrderedCartButton  action={orderedCartAction} cartId={cart?._id} />
        </div>
    )
}

export default CartList