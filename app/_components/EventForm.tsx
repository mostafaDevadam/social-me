"use client";

import React, { useActionState, useEffect } from 'react'
import { EVENT_TYPE } from '../_types/types';
import { toast } from 'react-toastify';

type EventFormProps = {
    pageId?: any,
    groupId?: any,
    userId?: any
    event?: EVENT_TYPE
    action: (prevState: any, formData: FormData) => Promise<any>
    type_action: string // edit or create
}


const EventForm = ({ action, type_action, pageId, groupId, userId, event }: EventFormProps) => {
    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state && state.success && type_action === 'create') {
            toast.success("Event has been created")
           /* if (type_action === 'create') {
                console.log("state:", state)
                //alert("success")
                toast("Event has been created")
                //toast.success("Event has been created")
            } else if (type_action === 'edit') {
                console.log("state:", state)
                //alert("success")
                toast("Event has been updated")
                //toast.success("Event has been created")
            }*/

        }

        if (state && state.success && type_action === 'edit') { 
            toast.success("Event has been updated")
        }

        if (state && state.error) {
            console.log("state:", state)
            toast("Cannot create/update event")
           /* if (type_action === 'create') {
                console.log("state:", state)
                //alert("success")
                toast("Cannot create event")
                //toast.success("Event has been created")
            } else if (type_action === 'create') {
                console.log("state:", state)
                //alert("success")
                toast("Cannot update event")
                //toast.success("Event has been created")
            }*/

        }
    }, [state])
    return (
        <form action={formAction} className='mt-10 border mx-auto flex flex-col gap-5  rounded-md shadow-sm w-80 pb-5 px-2'>
            <div className='flex flex-row justify-between gap-5 mt-3'>
                {userId && <input type="hidden" name="userId" value={userId} />}
                {pageId && <input type="hidden" name="pageId" value={pageId} />}
                {groupId && <input type="hidden" name="groupId" value={groupId} />}
                {event && event?._id && <input type="hidden" name="eventId" value={event?._id} />}
                <label htmlFor="name">Title</label>
                <input type="text" id="title" name="title" defaultValue={(type_action === 'edit') ? event?.title : ''}
                    className='px-2 py-2 border rounded-md'
                />
            </div>
            <div className='flex flex-row gap-5 justify-start '>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" defaultValue={(type_action === 'edit') ? event?.description : ''}
                    className='px-2 py-2 border rounded-md resize-none w-80'
                />
            </div>
            <button type="submit" className='bg-sky-500 rounded-md px-2 py-2 text-white'>{type_action === 'create' ? 'Create' : 'Save'}</button>
        </form>
    )
}

export default EventForm