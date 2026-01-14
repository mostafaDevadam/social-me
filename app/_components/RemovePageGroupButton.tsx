"use client";
import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';

type RemovePageGroupButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    pageId?: string
    groupId?: string
}
const RemovePageGroupButton = ({action, pageId, groupId}: RemovePageGroupButtonProps) => {

    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state) {
          console.log("state:", state)
          toast("Removing Page/Group!")
          
        }
      }, [state])

    return (
        <form action={formAction} method='post'>
            <input type='hidden' name='pageId' value={pageId} />
            <input type='hidden' name='groupId' value={groupId} />
            <button type='submit' className='border rounded-md bg-red-500 text-white px-2 py-1'>remove</button>
        </form>

    )
}

export default RemovePageGroupButton