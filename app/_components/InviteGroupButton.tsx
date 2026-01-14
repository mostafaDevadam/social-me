"use client";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react'
import { createInvivationEventAction, createInvivationGroupAction, createInvivationPageAction } from '../actions/invitations.actions';
import { Button } from '@/components/ui/button';
import { USERTYPE } from '../_types/types';
import InvitationForm from './InvitationForm';


type InviteGroupButtonProps = {
    //action: (prevState: any, formData: FormData) => Promise<any>
    groupId?: any
    users?: USERTYPE[]
}



const InviteGroupButton = ({ groupId, users }: InviteGroupButtonProps) => {
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

                    <InvitationForm action={createInvivationGroupAction} groupId={groupId} users={users} />

                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </DialogContent>

            </Dialog>
        </>
    )
}

export default InviteGroupButton