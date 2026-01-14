import EventForm from '@/app/_components/EventForm'
import { getID } from '@/app/_lib/id'
import { updateEventByIdAction } from '@/app/actions/events.actions'
import { getEventById } from '@/app/api/events'
import React from 'react'

const EditEventPage = async ({params}: {params: {id: string}}) => {
  const userId = await getID()
  const {id: eventId } = await params
  const event = await getEventById(eventId)
  console.log("event:", event);


  return (
    <div className="mx-auto w-full border">
            <h1 className='text-center mt-5'>New Event</h1>

            <div className='mt-5 pb-5'>
                <EventForm type_action='edit' userId={userId} event={event} action={updateEventByIdAction} />
            </div>
        </div>
  )
}

export default EditEventPage