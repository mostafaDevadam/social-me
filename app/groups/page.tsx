import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { getAllGroups, getAllGroupsByUserId } from '../api/group'
import GroupsList from '../_components/GroupsList'
import { GROUP_TYPE } from '../_types/types'
import Link from 'next/link'
import { getID } from '../_lib/id'

const GroupsPage = async () => {

const userId = await getID()
const groups: GROUP_TYPE[] = await getAllGroups()
const user_groups: GROUP_TYPE[] = await getAllGroupsByUserId()
 console.log("groups:", groups)
 console.log("user_groups:", user_groups)


  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">

       <div className='flex flex-row justify-end w-full'>
        <Link href="/groups/new" className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2 border rounded-md'>New Group</Link>
      </div>

      <div className="text-center mx-auto flex flex-col justify-center">
        <div className="mx-auto mt-10 ">
          <Tabs defaultValue="groups" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="groups">Groups</TabsTrigger>
              <TabsTrigger value="mygroups">MyGroups</TabsTrigger>
            </TabsList>
            <TabsContent value="groups">
              <GroupsList groups={groups} isJoin={true} userId={userId} />
            </TabsContent>
            <TabsContent value="mygroups">
              <GroupsList groups={user_groups} isJoin={false} userId={userId} />
            </TabsContent>
          </Tabs>
          </div>
      </div>
    </div>
  )
}

export default GroupsPage