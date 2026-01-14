import EventForm from '@/app/_components/EventForm'
import { getID } from '@/app/_lib/id'
import { createEventByUserAction } from '@/app/actions/events.actions'
import React from 'react'

const NewEventPage = async () => {
    const userId = await getID()


  return (
     <div className="mx-auto w-full border">
            <h1 className='text-center mt-5'>New Event</h1>

            <div className='mt-5 pb-5'>
                <EventForm type_action='create' userId={userId} action={createEventByUserAction} />
            </div>
        </div>
  )
}

export default NewEventPage