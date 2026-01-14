"use client";

import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useActionState } from 'react'
import { USERTYPE } from '../_types/types';
import InvitationForm from './InvitationForm';
import { createInvivationEventAction } from '../actions/invitations.actions';

type InviteEventButtonProps = {
 //action: (prevState: any, formData: FormData) => Promise<any>
 eventId?: any
 users?: USERTYPE[]
}

const InviteEventButton = ({ eventId, users}: InviteEventButtonProps) => {

    //const [state, formAction] = useActionState(action, null)


    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <button className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2'>Invite</button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='text-center'>Invitation</DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>

                         <InvitationForm action={createInvivationEventAction} eventId={eventId} users={users} />

                         <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                </DialogContent>

            </Dialog>
        </>


    )
}

export default InviteEventButton