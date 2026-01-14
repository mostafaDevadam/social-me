"use client";

import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';

type PayOrderButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    orderId: any
}
const PayOrderButton = ({ action, orderId }: PayOrderButtonProps) => {
    const [state, formAction] = useActionState(action, null)
    useEffect(() => {
        if (state && state.success) {
            console.log("state:", state)
            toast("Order has been paid")

        }
        if (state && state.error) {
            console.log("state:", state)
            toast("Cannot pay order")
        }
    }, [state])
    return (
        <form action={formAction} method='post' className='w-full'>
            <input type="hidden" name="orderId" value={orderId} />
            <input type="hidden" name="isPaid" value={"true"} />
            <button type="submit" className='text-blue-900 hover:bg-blue-500 hover:text-white border py-1 rounded-md w-full'>Pay</button>
        </form>
    )
}

export default PayOrderButton