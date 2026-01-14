"use client";

import React, { useActionState, useEffect } from 'react'
import { COLLECTION_TYPE } from '../_types/types'
import { toast } from 'react-toastify';

type CollectionFormProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    type_action: string
    collection?: COLLECTION_TYPE
    userId?: any
}
const CollectionForm = ({ type_action, collection, userId, action }: CollectionFormProps) => {

    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state && state.success) {
            console.log("state:", state)
            //alert("success")
            if (type_action === 'create') {
                toast("Collection has been created")
            } else if (type_action === 'edit') {
                toast("Collection has been updated")
            }

        }

        if (state && state.error) {
            console.log("state:", state)
            //alert("success")
            if (type_action === 'create') {
                toast("Cannot create collection")
            } else if (type_action === 'edit') {
                toast("Cannot update collection")
            }

        }
    }, [state])


    return (
        <form action={formAction} className="flex flex-col gap-2 mx-auto w-full">
            <input type="hidden" name="productId" value={collection?._id} />
            <input type="hidden" name="userId" value={userId} />
            <div className='flex flex-col gap-2'>
                <label htmlFor="message">Name</label>
                <input name="name" className='border px-2 py-1 rounded-md ' defaultValue={collection?.name} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="description">Description</label>
                <textarea name="description" className='border px-2 py-1 rounded-md resize-none' defaultValue={collection?.description} />
            </div>
            <button type='submit' className="ml-auto w-full size-14 h-10 flex-none bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold py-2 px-2 rounded-md">
                {type_action === 'create' ? 'Create' : 'Update'}
            </button>
        </form>
    )
}

export default CollectionForm