"use client";

import React from 'react'
import { EVENT_TYPE, GROUP_TYPE, PAGE_TYPE } from '../_types/types'
import CardEvent from './CardEvent'


type EventsListProps = {
    events: EVENT_TYPE[]
    userId: any
    page?: PAGE_TYPE
    group?:GROUP_TYPE
}
const EventsList = ({ events, userId, page, group }: EventsListProps) => {
    return (
        <div className='space-y-4 mx-auto w-full'>
                        {events.map((event: EVENT_TYPE) => (
                            <>
                             {event.isPublic && <CardEvent key={event._id} event={event} userId={userId} />}
                             {/* admin page can see page events */}
                             {!event.isPublic && page?.user == userId && event.page == page?._id && <CardEvent key={event?._id} event={event} userId={userId} pageId={page?._id} />}
                             {/* any one can see page events */}
                             {!event.isPublic && event.page == page?._id && <CardEvent key={event?._id} event={event} userId={userId} pageId={page?._id}/>}
                              {/* admin group can see group events */}
                             {!event.isPublic && group?.user == userId && event.group == group?._id && <CardEvent key={event?._id} event={event} userId={userId} groupId={group?._id}/>}
                             {/* any one can see group events */}
                             {!event.isPublic && event.group == group?._id && <CardEvent key={event?._id} event={event} userId={userId} groupId={group?._id} />}
                            </>
                          
                        ))}

                        
                    </div>
    )
}

export default EventsList