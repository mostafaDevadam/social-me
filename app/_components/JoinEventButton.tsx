"use client";

import { redirect } from 'next/navigation';
import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';

type JoinEventButtonProps = {
  action: (prevState: any, formData: FormData) => Promise<any>
  userId?: any
  pageId?: any
  groupId?: any
  eventId?: any
}
const JoinEventButton = ({ action, eventId }: JoinEventButtonProps) => {
  const [state, formAction] = useActionState(action, null)
   useEffect(() => {
     if(state && state.success) {
       console.log("state:", state)
       toast("Event has been joined")
      // if (pageId) redirect("/pages/" + pageId)
      // if (groupId) redirect("/groups/" + groupId)
      // if (eventId) redirect("/events/" + eventId)
       //redirect("/")
     }

     if(state && state.error) { 
       console.log("state:", state)
       toast("Cannot join event")
     }
   }, [state])
  return (
    <form action={formAction} method='post' className='flex items-center justify-center'>
      <input type='hidden' name='eventId' value={eventId} />
      <button type="submit" className='border rounded-md px-2 py-1'>join</button>
    </form>

  )
}

export default JoinEventButton