"use client";


import React from 'react'
import { ORDER_TYPE, PRODUCT_TYPE } from '../_types/types';
import PayOrderButton from './PayOrderButton';
import { payOrderAction } from '../actions/order.actions';
type OrdersListProps = {
    orders: ORDER_TYPE[]

}
const OrdersList = ({ orders }: OrdersListProps) => {
    return (
        <div className='space-y-4 w-full flex flex-row flex-wrap gap-5 border px-2 pb-2'>
            {orders.map((order: ORDER_TYPE) => (
                <div key={order?._id} className='flex flex-col gap-5 border rounded-md mt-3 pb-2 px-2'>
                    <p className='text-start'>Products:</p>
                    <div className='flex flex-col gap-2 text-start -mt-5'>{order.products?.map((product: PRODUCT_TYPE) =>
                        <div className='border px-2 py-2 rounded-md bg-blue-400 hover:bg-blue-500 text-white'>
                            <p>Name: {product.name}</p>
                            <span>Price: {product.price}</span>
                        </div>

                    )}</div>

                    <p className='px-2 text-blue-900'>Total Price: {order.total_price}</p>
                    <div className='flex flex-row w-full'>
                        {
                            !order.isPaid ?
                                <PayOrderButton action={payOrderAction} orderId={order?._id} />
                                :
                                <button className='text-blue-900 hover:bg-blue-500 hover:text-white border py-1 rounded-md w-full'>Paid</button>
                        }
                    </div>

                </div>

            ))
            }
        </div >
    )
}

export default OrdersList