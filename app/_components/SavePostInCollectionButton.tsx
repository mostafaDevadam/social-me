"use client";

import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';

type SavePostInCollectionButtonProps = {
    action:  (prevState: any, formData: FormData) => Promise<any>
    postId: any
    collectionId: any

}
const SavePostInCollectionButton = ({action,collectionId,postId}: SavePostInCollectionButtonProps) => {
    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if(state && state.success){
            console.log("state:", state)
            toast("Saved in collection!")
        }

         if(state && state.error){
            console.log("state:", state)
            toast("Cannot Save in collection!")
        }
    })
  return (
     <form action={formAction}>
        <input type='hidden' name="postId" value={postId} />
         <input type='hidden' name="collectionId" value={collectionId} />
        <button type="submit" className='border rounded-md bg-sky-400 hover:bg-sky-500 text-white px-2 py-1 mb-3 ' >Save</button>
     </form>
  )
}

export default SavePostInCollectionButton