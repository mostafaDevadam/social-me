"use client";

import React, { useActionState, useEffect } from 'react'
import { FRIEND_TYPE, REQUEST_F_TYPE } from '../_types/types';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

type RemoveRequestFriendButtonProps = {
  request?: REQUEST_F_TYPE
  friend?: FRIEND_TYPE
  action: (prevState: any, formData: FormData) => Promise<any>
  type: string // friend|request
  //userId: any
}


const RemoveRequestFriendButton = ({ action, request, friend, type }: RemoveRequestFriendButtonProps) => {
  const [state, formAction] = useActionState(action, null)

  useEffect(() => {
    if (state) {
      console.log("state:", state)
      toast("Removing Request friend!")
      redirect("/friends")
    }
  }, [state])


  return (
    <form action={formAction} method='post'>
      {type === 'request' && <input type='hidden' name='requestId' value={request?._id} />}
      {type === 'friend' && <input type='hidden' name='friendId' value={friend?._id} />}
      <button className='border rounded-md bg-red-500 text-white px-2 py-1'>Remove</button>
    </form>

  )
}

export default RemoveRequestFriendButton