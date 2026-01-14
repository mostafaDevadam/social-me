import InviteEventButton from '@/app/_components/InviteEventButton'
import InvitePageButton from '@/app/_components/InvitePageButton'
import { getID } from '@/app/_lib/id'
import { EVENT_TYPE, USERTYPE } from '@/app/_types/types'
import { createInvivationEventAction } from '@/app/actions/invitations.actions'
import { getEventById } from '@/app/api/events'
import { getAllUsersWithoutCurrentUser } from '@/app/api/user'
import Link from 'next/link'
import React from 'react'

const layout = async ({ children, params }: { children: React.ReactNode, params: { params: { id: string } } }) => {
    console.log("layout")
    const { id: eventId } = await params
    const userId = await getID()
    console.log("eventId:", eventId)
    const event: EVENT_TYPE = await getEventById(eventId)
    console.log("event:", event)

    const users: USERTYPE[] = await getAllUsersWithoutCurrentUser()


    return (
        <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black border">
            <div className="text-center mx-auto flex flex-col justify-center border w-full">
                <div className='bg-blue-500 h-40 w-full'>
                </div>
                <div className='bg-green-500 h-40 w-40 ms-10 absolute z-10 top-1 mt-40 text-9xl text-white'>
                    E
                </div>

                <div className='h-14 w-full flex flex-row gap-10 px-2 py-2 justify-between mt-14'>
                    <div className='flex flex-row gap-10'>
                        <Link href={"/events/" + eventId} className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2'>Home</Link>
                        <Link href={"/events/" + eventId + "/members"} className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2'>Members</Link>

                        {
                            event?.user === userId &&
                            <div className='me-5 mt-2'>
                                <Link href={"/events/" + eventId + "/invitations"} className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2'>Invitations</Link>
                            </div>
                        }
                        <InviteEventButton  eventId={eventId} users={users} />

                    </div>
                    {
                        event?.user === userId &&
                        <div className='me-5 mt-2'>
                            <Link href={"/events/" + eventId + "/edit"} className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2'>Edit</Link>
                        </div>
                    }



                </div>

                <div className="mt-1 w-full flex flex-row justify-around gap-60 ">
                    <div className='flex flex-col gap-5 text-start border rounded-md px-2 py-2 w-80 h-20 ms-5'>
                        <p>
                            {event?.title}
                        </p>
                        <p>
                            {event?.description}
                        </p>
                    </div>
                    <div className='w-full ms-5'>
                        {children}
                    </div>

                    <div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default layout