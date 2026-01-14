import MembersList from '@/app/_components/MembersList'
import { getID } from '@/app/_lib/id'
import { getGroupById } from '@/app/api/group'
import { getAllMembersByGroupId } from '@/app/api/members'
import React from 'react'

const MembersPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
      console.log("pageId:", id)
  
      const userId = await getID()
      console.log("userId:", userId)
  
      const members = await getAllMembersByGroupId(id)
      console.log("members:", members)
  
      const group = await getGroupById(id)
      console.log("group:", group)
  
  
      return (
          <div className='space-y-4 mx-auto w-full pb-5'>
              <MembersList members={members}  />
          </div>
      )
}

export default MembersPage