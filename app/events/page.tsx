import React from 'react'
import { getAllEvents, getAllEventsByUser } from '../api/events'
import { getID } from '../_lib/id'
import EventsList from '../_components/EventsList'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const EventsPage = async () => {
    const userId = await getID()
    const events = await getAllEvents()
    const user_events = await getAllEventsByUser()
    console.log("events:", events)
    console.log("user_events:", user_events)


    return (
        <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">

       <div className='flex flex-row justify-end w-full'>
        <Link href="/events/new" className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2 border rounded-md'>New Event</Link>
      </div>

      <div className="text-center mx-auto flex flex-col justify-center">
        <div className="mx-auto mt-10 ">
          <Tabs defaultValue="events" className="w-[1000px]">
            <TabsList>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="myevents">MyEvents</TabsTrigger>
            </TabsList>
            <TabsContent value="events">
              <EventsList events={events} userId={userId} />
            </TabsContent>
            <TabsContent value="myevents">
              <EventsList events={user_events}  userId={userId} />
            </TabsContent>
          </Tabs>
          </div>
      </div>
    </div>
    )
}

export default EventsPage