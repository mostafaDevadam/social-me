import CartList from '@/app/_components/CartList'
import { getID } from '@/app/_lib/id'
import { getCartByUserId } from '@/app/api/cart'
import React from 'react'

const CartPage = async () => {

    const userId = await getID()
    const user_cart = await getCartByUserId(userId)
    console.log('user_cart', user_cart)
    return (
        <div>
            <CartList cart={user_cart} userId={userId} />
        </div>
    )
}

export default CartPage