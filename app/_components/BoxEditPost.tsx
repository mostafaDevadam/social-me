"use client";

import React, { useActionState, useEffect } from 'react'
import { POSTTYPE } from '../_types/types';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

type BoxEditPostProps = {
    post: POSTTYPE
    action: (prevState: any, formData: FormData) => Promise<any> 
}

const BoxEditPost = ({ action, post }: BoxEditPostProps) => {

      const [state, formAction] = useActionState(action, null)
    
      useEffect(() => {
        if (state) {
          console.log("state:", state)
          if(state.success){
            toast("Post has been updated")
          }
          redirect("/")
        }
      }, [state])

    return (
        <form action={formAction} className="flex flex-col gap-2">
            <input type='hidden' name="postId" value={post?._id} />
            <textarea name="content" defaultValue={post?.content} className="size-14 grow w-full h-20 resize-none border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
            <button type='submit' className="ml-auto size-14 h-10 flex-none bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold py-2 px-2 rounded-md">Edit</button>
        </form>
    )
}

export default BoxEditPost