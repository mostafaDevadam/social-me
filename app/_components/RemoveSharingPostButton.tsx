"use client";

import React, { useActionState, useEffect } from 'react'
import { SHARE_TYPE } from '../_types/types'
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import { refresh } from 'next/cache';
import { redirect } from 'next/navigation';

type RemoveSharingPostButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    share: SHARE_TYPE


}
const RemoveSharingPostButton = ({ share, action }: RemoveSharingPostButtonProps) => {
    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state && state.success) {
            console.log("state:", state)
            //alert("success")
            toast("Removing sharing post!")
            //toast.success("Event has been created")
            
        }
    }, [state])
    return (
        <form action={formAction} method='post'>
            <input type='hidden' name='shareId' value={share?._id} />
            <button type='submit' className='hover:bg-red-500 hover:border hover:text-white border rounded-md bg-red-400 text-white px-2 py-1'>Remove</button>
        </form>
    )
}

export default RemoveSharingPostButton