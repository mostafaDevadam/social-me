"use client";


import React, { useActionState } from 'react'

type JoinButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    pageId?: any
    groupId?: any

}
const JoinButton = ({ action, pageId, groupId }: JoinButtonProps) => {

    const [state, formAction] = useActionState(action, null)
    
    return (
        <form action={formAction} method='post'>
            <input type='hidden' name='pageId' value={pageId} />
            <input type='hidden' name='groupId' value={groupId} />
            <button type="submit" className='border rounded-md bg-sky-500 text-white px-2 py-1'>join</button>
        </form>

    )
}

export default JoinButton