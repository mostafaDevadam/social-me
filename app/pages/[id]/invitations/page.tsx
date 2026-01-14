import InvitationsList from '@/app/_components/InvitationsList'
import { getID } from '@/app/_lib/id'
import { getAllInvitationsByEventId, getAllInvitationsByPageId } from '@/app/api/invitations'
import { get } from 'http'
import React from 'react'

const PageInvitationsPage = async ({params}: {params: {id: string}}) => {
    const {id: pageId} = await params
    const userId = await getID()

    console.log("PageInvitationsPage pageId:", pageId)

    const page_invitations = await getAllInvitationsByPageId(pageId)
    console.log("page_invitations:", page_invitations);

  return (
    <InvitationsList invitations={page_invitations} userId={userId} />
  )
}

export default PageInvitationsPage