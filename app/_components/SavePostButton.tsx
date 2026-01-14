"use client";

import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';

type SavePostButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    postId: any

}

const SavePostButton = ({ action, postId }: SavePostButtonProps) => {
    const [state, formAction] = useActionState(action, null)

      useEffect(() => {
            if (state) {
              console.log("state:", state)
              toast("Saving Post!")
              
            }
          }, [state])


    return (
        <form action={formAction} method='post'>
            <input type='hidden' name='postId' value={postId} />
            <button type='submit'>Save</button>
        </form>

    )
}

export default SavePostButton