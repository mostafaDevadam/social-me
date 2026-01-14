'use client';


import React, { useActionState, useEffect } from 'react'
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

type BoxCommentProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    postId: any
}



const BoxComment = ({ action, postId }: BoxCommentProps) => {

    const [state, formAction] = useActionState(action, null)


     useEffect(() => {
                if (state) {
                  console.log("state:", state)
                  if(state.success){
                    toast("Comment has been created")
                  }
                  redirect("/post/"+postId)
                }
              }, [state])

    return (
        <form action={formAction} className="flex flex-col gap-2">
            <input type='hidden' name="postId" value={postId} />
            <textarea name="content" className="size-14 grow w-full h-20 resize-none border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
            <button type='submit' className="ml-auto  h-10 flex-none bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold py-2 px-2 rounded-md">Comment</button>
        </form>
    )
}

export default BoxComment