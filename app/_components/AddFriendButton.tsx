"use client";

import React, { useActionState, useEffect } from 'react'
import { USERTYPE } from '../_types/types';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

type AddFriendButtonProps = {
    person: USERTYPE
    action: (prevState: any, formData: FormData) => Promise<any>
    userId: any
}
const AddFriendButton = ({ action, person, userId }: AddFriendButtonProps) => {
    const [state, formAction] = useActionState(action, null)

     useEffect(() => {
            if (state && state.success) {
                console.log("state:", state)
                toast("Added friend!")
                //redirect("/people")
            }

            if(state && state.error){
                console.log("state:", state)
                toast("Cannot add friend")
            }
        }, [state])

    return (
        <form action={formAction} method='post'>
            <input type='hidden' name='userId' value={userId} />
            <input type='hidden' name='receiverId' value={person?._id} />
            <button type='submit' className='border rounded-md bg-sky-500 text-white px-2 py-1'>Add Friend</button>
        </form>

    )
}

export default AddFriendButton