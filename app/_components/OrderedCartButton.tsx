 "use client";

 import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';
 
 type OrderedCartButtonProps = {
      action: (prevState: any, formData: FormData) => Promise<any>
      cartId?: any
 }
 const OrderedCartButton = ({action, cartId}: OrderedCartButtonProps) => {
    const [state, formAction] = useActionState(action, null)

    console.log("OrderedCartButton cartId:", cartId)


    useEffect(() => {
           if(state && state.success) {
             console.log("state:", state)
             toast("Order has been placed")
           }
           if(state && state.error) {
             console.log("state:", state)
             toast("Cannot place order")
           }
    }, [state])


   return (
    <form action={formAction} method='post'>
        <input type="hidden" name="cartId" value={cartId!!} />
        <input type="hidden" name="isOrdered" value={"true"} />
        <button type="submit" className='w-full bg-blue-500 hover:bg-blue-600 rounded-md text-white py-2'>Order</button>
    </form>
   )
 }
 
 export default OrderedCartButton