"use client";

import React from 'react'
import { REQUEST_F_TYPE } from '../_types/types'
import RemoveRequestFriendButton from './RemoveRequestFriendButton';
import ConfirmButton from './ConfirmButton';
import CancelButton from './CancelButton';
import { cancelRequestFriendAction, confirmRequestFriendAction, removeRequestFriendAction } from '../actions/request.actions';

type CardRequestProps = {
    request: REQUEST_F_TYPE
    userId: any
}
const CardRequest = ({ request, userId }: CardRequestProps) => {
    return (
        <div className='flex flex-row justify-between rounded-md border mt-2 pt-2 p-4'>
            {userId === request?.sender?._id?.toString() ? (
                <div className='w-full text-start'>
                    <span>{request.receiver?.fullName} </span>
                    <div className='flex flex-row justify-end '>
                        {!request.isConfirm &&<span className='me-5 border rounded-md px-2 py-1'>sent</span>}
                         <RemoveRequestFriendButton action={removeRequestFriendAction} type='request' request={request} />

                    </div>
                </div>
            )
                :
                (
                    <div className='w-full text-start'>
                        {!request.isConfirm && (
                            <>
                                <span className='text-start'>{request.sender?.fullName} </span>
                                <div className='flex flex-row justify-between mt-3'>
                                    <ConfirmButton action={confirmRequestFriendAction} request={request}  />
                                    <CancelButton action={cancelRequestFriendAction} request={request} />
                                </div>
                            </>
                        )
                        }
                    </div>
                )}
        </div>
    )
}

export default CardRequest