"use client";

import React, { useActionState } from 'react'
import { GROUP_TYPE, PAGE_TYPE } from '../_types/types';

type EditPageGroupFormProps = {
    page?: PAGE_TYPE,
    group?: GROUP_TYPE,
    action: (prevState: any, formData: FormData) => Promise<any>
    type: string // page or group
    type_action: string // edit or create
    userId?: any
}
const EditPageGroupForm = ({ group, page, action, type, type_action, userId }: EditPageGroupFormProps) => {
    const [state, formAction] = useActionState(action, null)

    return (

        <form action={formAction} className='mt-10 border mx-auto flex flex-col gap-5  rounded-md shadow-sm w-80 pb-5 px-2'>
            <div className='flex flex-row justify-between gap-5 mt-3'>
                {userId && <input type="hidden" name="userId" value={userId} />}
                {page?._id && <input type="hidden" name="pageId" value={page?._id} />}
                {group?._id && <input type="hidden" name="groupId" value={group?._id} />}
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" defaultValue={(type_action === 'edit' && type === 'page')? page?.name : group?.name}
                    className='px-2 py-2 border rounded-md'
                />
            </div>
            <div className='flex flex-row gap-5 justify-start '>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" defaultValue={(type_action === 'edit' && type === 'page' )? page?.description : group?.description}
                    className='px-2 py-2 border rounded-md resize-none w-80'
                />
            </div>
            <button type="submit" className='bg-sky-500 rounded-md px-2 py-2 text-white'>{type_action === 'create' ? 'Create' : 'Save'}</button>
        </form>

    )
}

export default EditPageGroupForm