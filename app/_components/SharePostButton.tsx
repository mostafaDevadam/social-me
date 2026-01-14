"use client";


import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';

type SharePostButtonProps = {
     action: (prevState: any, formData: FormData) => Promise<any>
     userId: any
     postId: any 
}

const SharePostButton = ( {action, userId, postId}: SharePostButtonProps) => {
    const [state, formAction] = useActionState(action, null)

      useEffect(() => {
              if (state && state.success) {
                  console.log("state:", state)
                  //alert("success")
                  toast("Sharing Post!")
                  //toast.success("Event has been created")
              }
          }, [state])
    

  return (
    <>
    <form action={formAction} method='post'>
        <input type='hidden' name='postId' value={postId} />
        <button className='me-5 cursor-pointer'>Share</button> 
    </form>
    </>
    
   
  )
}

export default SharePostButton