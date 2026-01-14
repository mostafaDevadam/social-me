import InvitationsList from '@/app/_components/InvitationsList'
import { getID } from '@/app/_lib/id'
import { getAllInvitationsByEventId } from '@/app/api/invitations'
import { get } from 'http'
import React from 'react'

const EventInvitationsPage = async ({params}: {params: {id: string}}) => {
    const {id: eventId} = await params
    const userId = getID()

    console.log("EventInvitationsPage eventId:", eventId)

    const event_invitations = await getAllInvitationsByEventId(eventId)
    console.log("event_invitations:", event_invitations);

  return (
    <InvitationsList invitations={event_invitations} userId={userId} />
  )
}

export default EventInvitationsPage