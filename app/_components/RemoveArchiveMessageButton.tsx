"use client";

import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';

type RemoveArchiveMessageButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    archiveId: any
    messageId: any
}
const RemoveArchiveMessageButton = ({ action, archiveId, messageId }: RemoveArchiveMessageButtonProps) => {
    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state && state.success) {
            console.log("state:", state)
            toast("Message has been removed from archive")
        } else if (state && state.error) {
            console.log("state:", state)
            toast("Cannot remove message from archive")
        }
    }, [state])
    
    return (
        <form action="">
            <input type="hidden" name="archiveId" value={archiveId} />
            <input type="hidden" name="messageId" value={messageId} />
            <button type="submit" className='border rounded-md px-2 py-1 hover:bg-red-500 hover:text-white'>Remove</button>
        </form>
    )
}

export default RemoveArchiveMessageButton