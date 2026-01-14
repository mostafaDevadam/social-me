"use client";

import React, { useActionState, useEffect } from 'react'
import { ARCHIVE_TYPE, POSTTYPE } from '../_types/types';
import { toast } from 'react-toastify';

type UnsaveButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    post: POSTTYPE
    archive: ARCHIVE_TYPE
}
const UnsaveButton = ({ post, archive, action }: UnsaveButtonProps) => {
    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state) {
          console.log("state:", state)
          toast("Unsaved!")
          
        }
      }, [state])


    return (
        <form action={formAction} method='post'>
            <input type='hidden' name='postId' value={post._id} />
            <input type='hidden' name='archiveId' value={archive?._id} />
            <button type='submit' className='me-5 cursor-pointer border rounded-md py-1 px-2'>Unsave</button>
        </form>

    )
}

export default UnsaveButton