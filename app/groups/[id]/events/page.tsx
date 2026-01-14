import EventsList from '@/app/_components/EventsList';
import { getID } from '@/app/_lib/id';
import { getAllEventsByGroup } from '@/app/api/events';
import { getGroupById } from '@/app/api/group';
import React from 'react'

const EventsGroup = async ({ params }: { params: { id: string } }) => {
    const { id: groupId } = await params

    const userId = await getID();
    console.log("userId:", userId);
    const group_events = await getAllEventsByGroup(groupId)
    console.log("group_events#:", group_events);
    const group = await getGroupById(groupId)
    console.log("group:", group);

  return (
   <EventsList events={group_events} userId={userId} group={group}/>
  )
}

export default EventsGroup