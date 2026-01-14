import EventsList from '@/app/_components/EventsList';
import { getID } from '@/app/_lib/id';
import { PAGE_TYPE } from '@/app/_types/types';
import { getAllEventsByPage } from '@/app/api/events';
import { getPageById } from '@/app/api/pages';
import React from 'react'

const EventsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params

  const userId = await getID();
  console.log("userId:", userId);
  const page_events = await getAllEventsByPage(id)
  console.log("page_events:", page_events);
  const page: PAGE_TYPE = await getPageById(id)
  console.log("page:", page);


  return (
    <EventsList events={page_events} userId={userId} page={page} />
  )
}

export default EventsPage