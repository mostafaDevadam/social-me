"use client";

import React, { useActionState, useEffect } from 'react'
import { COMMENTTYPE, POSTTYPE } from '../_types/types'
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

type RemoveButtonProps = {
    post?: POSTTYPE
    comment?: COMMENTTYPE
    type: string
    action: (prevState: any, formData: FormData) => Promise<any>
}
const RemoveButton = ({ action, post, comment, type }: RemoveButtonProps) => {

    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state) {
            console.log("state:", state)
            if (type === 'comment') {
                toast("Removing Comment!")
                redirect("/post/" + comment?.post)
            } else if (type === 'post') {
                toast("Removing Post!")
                redirect("/")
            }
        }
    }, [state])


    return (
        <form action={formAction} method='post'>
            <input type='hidden' name={type === 'post' ? 'postId' : 'commentId'} value={type === 'post' ? post?._id : comment?._id} />
            <button type="submit" className='cursor-pointer'>Remove</button>
        </form>

    )
}

export default RemoveButton