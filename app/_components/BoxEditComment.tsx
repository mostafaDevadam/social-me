"use client";

import React, { useActionState, useEffect } from 'react'
import { COMMENTTYPE } from '../_types/types';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

type BoxEditCommentProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    comment: COMMENTTYPE
}

const BoxEditComment = ({ action, comment}: BoxEditCommentProps) => {
    const [state, formAction] = useActionState(action, null)

    console.log("comment:", comment.post)


    useEffect(() => {
            if (state) {
              console.log("state:", state)
              if(state.success){
                toast("Comment has been updated")
              }
              redirect("/post/"+comment?.post)
            }
          }, [state])


  return (
     <form action={formAction} className="flex flex-col gap-2">
            <input type='hidden' name="commentId" value={comment?._id} />
            <textarea name="content" defaultValue={comment?.content} className="size-14 grow w-full h-20 resize-none border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
            <button type='submit' className="ml-auto  h-10 flex-none bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold py-2 px-2 rounded-md">Edit</button>
        </form>
  )
}

export default BoxEditComment