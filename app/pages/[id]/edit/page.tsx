import EditPageGroupForm from '@/app/_components/EditPageGroupForm'
import { getID } from '@/app/_lib/id'
import { PAGE_TYPE } from '@/app/_types/types'
import { updatePageAction } from '@/app/actions/pages.actions'
import { getPageById } from '@/app/api/pages'
import React from 'react'

const EditPage = async ({ params }: { params: { id: string } }) => {

    const userId = await getID()

    const { id } = await params
    console.log("pageId:", id)

    const page: PAGE_TYPE = await getPageById(id)
    console.log("page:", page)


    return (
        <div className="mx-auto w-full border">
            <h1>Edit Page</h1>

            <h1>{page?.name}</h1>

            <div className='mt-5 pb-5'>
                <EditPageGroupForm page={page} type='page' type_action='edit' userId={userId} action={updatePageAction} />
            </div>



        </div>
    )
}

export default EditPage