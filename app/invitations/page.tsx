import React from 'react'
import InvitationsList from '../_components/InvitationsList'
import { getID } from '../_lib/id'
import { getAllInvitationsByReceiverId, getAllInvitationsBySenderId } from '../api/invitations'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const InvitationsPage = async () => {
    const userId = getID()
    const sender_invitations = await getAllInvitationsBySenderId()
    const receiver_invitations = await getAllInvitationsByReceiverId()
    console.log("sender_invitations:", sender_invitations);
    console.log("receiver_invitations:", receiver_invitations);


  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">

       <div className='flex flex-row justify-end w-full'>
      </div>

      <div className="text-center mx-auto flex flex-col justify-center">
        <div className="mx-auto mt-10 ">
          <Tabs defaultValue="sender" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="sender">Sender</TabsTrigger>
              <TabsTrigger value="receiver">Receiver</TabsTrigger>
            </TabsList>
            <TabsContent value="sender">
             <InvitationsList invitations={sender_invitations} userId={userId} />
            </TabsContent>
            <TabsContent value="receiver">
              <InvitationsList invitations={receiver_invitations} userId={userId} />
            </TabsContent>
          </Tabs>
          </div>
      </div>
    </div>
    
  )
}

export default InvitationsPage