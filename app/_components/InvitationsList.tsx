"use client";
import React from 'react'
import { INVITATION_TYPE } from '../_types/types';
import CardInvitation from './CardInvitation';

type InvitationsListProps = {
    invitations: INVITATION_TYPE[]
    userId: any
}
const InvitationsList = ({ invitations, userId }: InvitationsListProps) => {
    return (
        <div className='space-y-4 mx-auto w-full'>
            {invitations.map((invitation: INVITATION_TYPE) => (
                <CardInvitation key={invitation._id} invitation={invitation} userId={userId} />
            ))}
        </div>
    )
}

export default InvitationsList