import React, { use } from 'react'
import { getAllMembersByEventId } from '@/app/api/members';
import MembersList from '@/app/_components/MembersList';

const EventMembersPage = async ({params}: any ) => {
    const { id } = await params
    console.log("EventMembersPage eventId:", id)
    const event_members = await getAllMembersByEventId(id)
    console.log("event_members:", event_members);
  return (
    <div className='mb-5'>
        <MembersList members={event_members}  />
    </div>
    
  )
}

export default EventMembersPage