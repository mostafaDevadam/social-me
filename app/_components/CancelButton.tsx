"use client";

import React, { useActionState, useEffect } from 'react'
import { REQUEST_F_TYPE } from '../_types/types';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

type CancelButtonProps = {
    request: REQUEST_F_TYPE
    action: (prevState: any, formData: FormData) => Promise<any>
    //userId: any
}

const CancelButton = ({ action, request }: CancelButtonProps) => {

    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state) {
          console.log("state:", state)
          toast("Canceling friend request!")
          redirect("/friends")
        }
      }, [state])


    return (
        <form action={formAction} method='post'>
            <input type='hidden' name='requestId' value={request?._id} />
            <input type='hidden' name='isCancel' value={"true"} />
            <button className='border rounded-md bg-red-500 text-white px-2 py-1'>Cancel</button>
        </form>
    )
}

export default CancelButton