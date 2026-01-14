"use client";


import React from 'react'
import { EVENT_TYPE } from '../_types/types'
import Link from 'next/link';
import RemoveEventButton from './RemoveEventButton';
import JoinEventButton from './JoinEventButton';
import { joinEventAction, removeEventAction } from '../actions/events.actions';

type CardEventProps = {
    event: EVENT_TYPE
    userId: any
    pageId?: any
    groupId?: any
}
const CardEvent = ({ event, userId,groupId, pageId }: CardEventProps) => {
    return (
        <div className='flex flex-row justify-between rounded-md border mt-2 pt-2 p-4 w-1/2 mx-auto text-start'>
            <div className='text-start flex flex-row gap-2 justify-start'>
                <div className='bg-green-500 h-10 w-10   rounded-md text-center text-4xl text-white'>
                    E
                </div>
                <span className='text-start'>{event.title} </span>
            </div>

            <div className='flex flex-row justify-end gap-10'>
                <Link href={`/events/${event._id}`} className='border rounded-md bg-sky-500 text-white px-2 py-1'>View</Link>
                {
                    userId !== event.user && <JoinEventButton action={joinEventAction} userId={userId} eventId={event?._id} groupId={groupId} pageId={pageId} />
                }

                {
                    userId === event.user && <RemoveEventButton eventId={event?._id} action={removeEventAction} />
                }

            </div>

        </div>
    )
}

export default CardEvent