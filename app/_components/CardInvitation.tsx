"use client";
import React, { use } from 'react'
import { INVITATION_TYPE } from '../_types/types';
import RemoveInvitationButton from './RemoveInvitationButton';
import { confirmInviationEventAction, removeInvitationAction } from '../actions/invitations.actions';
import ConfirmInvitationButton from './ConfirmInvitationButton';

type CardInvitationProps = {
    invitation: INVITATION_TYPE
    userId: any
}
const CardInvitation = ({ invitation, userId }: CardInvitationProps) => {
    const userID = use(userId)
    console.log("invitation:", invitation?.receiver, invitation?.sender, userID)
    return (
        <div className='flex flex-row justify-between rounded-md shadow-md border mt-2 pt-2 p-4 w-full mx-auto text-start'>
            <div className='text-start flex flex-row gap-2 justify-start'>
                <div className='bg-green-500 h-10 w-10  rounded-md text-center text-4xl text-white'>
                    V
                </div>
                <div>
                    <p className='text-start w-60'>{invitation?.message} </p>
                  { invitation?.event && <p className='text-start'>event: {invitation?.event?.title} </p>}
                  { invitation?.page && <p className='text-start'>page: {invitation?.page?.name} </p>}
                   { invitation?.group && <p className='text-start'>group: {invitation?.group?.name} </p>}
                    {
                        userID == invitation?.receiver && <p>from: {invitation?.sender?.fullName}</p>
                    }

                      {
                        userID == invitation?.sender && <p>to: {invitation?.receiver?.fullName}</p>
                    }

                </div>

            </div>

            <div className='flex flex-row justify-end gap-10'>
                {
                    userID == invitation?.receiver && !invitation.isConfirmed &&
                    <ConfirmInvitationButton action={confirmInviationEventAction} invitationId={invitation?._id} />
                }

                {
                    userID == invitation?.sender &&
                    <RemoveInvitationButton action={removeInvitationAction} invitationId={invitation?._id} />
                }


            </div>

        </div>
    )
}

export default CardInvitation