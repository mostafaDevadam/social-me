"use client";

import React, { useActionState } from 'react'
import { INVITATION_TYPE, USERTYPE } from '../_types/types';


type InvitationFormProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    invitationId?: any
    inviation?: INVITATION_TYPE
    eventId?: any
    pageId?: any
    groupId?: any
    users?: USERTYPE[]

}
const InvitationForm = ({ action, users, invitationId, inviation, eventId, pageId, groupId }: InvitationFormProps) => {

    const [state, formAction] = useActionState(action, null)


    return (
        <form action={formAction} className='flex flex-col gap-2'>
            <input type="hidden" name="eventId" value={eventId} />
             <input type="hidden" name="pageId" value={pageId} />
             <input type="hidden" name="groupId" value={groupId} />
            <div className='flex flex-col gap-2'>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className='border px-2 py-1 rounded-md resize-none' />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="message">Who?</label>
                <select name="receiverId" className='border rounded-md px-2 py-2'>
                    <option value="choose">choose</option>
                    {
                        users?.map((user) => (
                            <option key={user._id} value={user._id}>{user.fullName}</option>
                        ))
                    }

                </select>
            </div>

            <button type='submit' className='bg-blue-500 text-white rounded-md px-2 py-2'>Invite</button>
        </form>
    )
}

export default InvitationForm