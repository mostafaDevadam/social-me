import EditPageGroupForm from '@/app/_components/EditPageGroupForm'
import { getID } from '@/app/_lib/id'
import { createPageAction } from '@/app/actions/pages.actions'
import React from 'react'

const NewPage = async () => {
 const userId = await getID()

    return (
        <div className="mx-auto w-full border">
            <h1 className='text-center mt-5'>New Page</h1>

            <div className='mt-5 pb-5'>
                <EditPageGroupForm type='page' type_action='create' userId={userId} action={createPageAction} />
            </div>
        </div>
    )
}

export default NewPage