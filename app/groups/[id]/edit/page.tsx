import EditPageGroupForm from '@/app/_components/EditPageGroupForm'
import { getID } from '@/app/_lib/id'
import { GROUP_TYPE } from '@/app/_types/types'
import { updateGroupAction } from '@/app/actions/group.actions'
import { getGroupById } from '@/app/api/group'
import React from 'react'

const EditGroupPage = async ({ params }: { params: { id: string } }) => {
  const userId = await getID()
  
      const { id } = await params
      console.log("groupId:", id)
  
      const group: GROUP_TYPE = await getGroupById(id)
      console.log("page:", group)
  
  
      return (
          <div className="mx-auto w-full border">
              <h1>Edit Group</h1>
  
              <h1>{group?.name}</h1>
  
              <div className='mt-5 pb-5'>
                  <EditPageGroupForm group={group} type='group' type_action='edit' userId={userId} action={updateGroupAction} />
              </div>
  
  
  
          </div>
      )
}

export default EditGroupPage