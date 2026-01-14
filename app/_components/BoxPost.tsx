'use client';

import React, { useActionState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';


type BoxPostProps = {
  action: (prevState: any, formData: FormData) => Promise<any>
  pageId?: any
  groupId?: any
  eventId?: any
}

const BoxPost = ({ action, pageId, groupId, eventId }: BoxPostProps) => {


  const [state, formAction] = useActionState(action, null)

  useEffect(() => {
    if (state) {
      console.log("state:", state)
      if (state.success) toast("Post has been created ")
      if (pageId) {
        if (state.success) toast("Post has been created ")
        if (state.error) toast("Cannot create post ")
        redirect("/pages/" + pageId)

      }
      else if (groupId) {
        if (state.success) toast("Post has been created ")
        if (state.error) toast("Cannot create post")
        redirect("/groups/" + groupId)

      }
      else if (eventId) {
        if (state.success) toast("Post has been created ")
        if (state.error) toast("Cannot create post")
        redirect("/events/" + eventId)

      }
      else redirect("/")

    }
  }, [state])


  return (
    <form action={formAction} className="flex flex-col gap-2 mx-auto w-1/2">
      <input type='hidden' name="pageId" value={pageId} />
      <input type='hidden' name="groupId" value={groupId} />
      <input type='hidden' name="eventId" value={eventId} />
      <textarea name="content" className="size-14 grow w-full h-20 resize-none border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
      <button type='submit' className="ml-auto size-14 h-10 flex-none bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold py-2 px-2 rounded-md">Post</button>
    </form>
  )
}

export default BoxPost