"use client";

import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';

type SaveMessageButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    messageId: any
    chatId: any
}

const SaveMessageButton = ({ action, messageId, chatId }: SaveMessageButtonProps) => {
    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state && state.success) {
            console.log("state:", state)
            toast("Message has been saved")
        } else if (state && state.error) {
            toast("Cannot save message")
        }
    }, [state])

    return (
        <form action={formAction}>
            <input type="hidden" name="messageId" value={messageId} />
            <input type="hidden" name="chatId" value={chatId} />
            <button type='submit' className='text-start'>Save</button>
        </form>
    )
}

export default SaveMessageButton