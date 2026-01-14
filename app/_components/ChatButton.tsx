"use client";
import React, { useActionState, useEffect } from 'react'
import { USERTYPE } from '../_types/types';
import { toast } from 'react-toastify';

type ChatButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    person: USERTYPE
    userId: any

}
const ChatButton = ({action, person, userId}: ChatButtonProps) => {
    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if(state && state.success){
            console.log("state:", state)
            toast("Chat has been started")
        }else if(state && state.error){
            console.log("state:", state)
            toast("Cannot start chat")
        }
    }, [ state ])
  return (
    <form action={formAction} method='post'>
        <input type="hidden" name="friendId" value={person._id} />
        <button type='submit' className='border rounded-md bg-sky-500 text-white px-2 py-1'>Chat</button>
    </form>
  )
}

export default ChatButton