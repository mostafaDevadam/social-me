"use client";

import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';

type RemoveProductButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    productId: string

}
const RemoveProductButton = ({ action, productId }: RemoveProductButtonProps) => {
    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state && state.success) {
            console.log("state:", state)
            toast("Removing product!")
        }

        if (state && state.error) {
            console.log("state:", state)
            toast("Cannot remove product!")
        }


    }, [state])

    return (
        <form action={formAction} method='post'>
            <input type='hidden' name='productId' value={productId} />
            <button type='submit' className='border rounded-md bg-red-400 hover:bg-red-500 text-white px-2 py-1'>Remove</button>

        </form>
    )
}

export default RemoveProductButton