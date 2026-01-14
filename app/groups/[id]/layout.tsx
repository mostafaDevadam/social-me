import InviteGroupButton from '@/app/_components/InviteGroupButton'
import { getID } from '@/app/_lib/id'
import { USERTYPE } from '@/app/_types/types'
import { getGroupById } from '@/app/api/group'
import { getPageById } from '@/app/api/pages'
import { getAllUsersWithoutCurrentUser } from '@/app/api/user'
import Link from 'next/link'
import React from 'react'

const Layout = async ({ children, params }: { children: any, params: { id: string } }) => {
    const { id } = await params
    console.log("pageId:", id)

    const userId = await getID()
    console.log("userId#:", userId)
    const group = await getGroupById(id)
    console.log("page#:", group, group?.user, userId)

    const users: USERTYPE[] = await getAllUsersWithoutCurrentUser()



    return (
        <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black border">
            <div className="text-center mx-auto flex flex-col justify-center border w-full">
                <div className='bg-blue-500 h-40 w-full'>
                </div>
                <div className='h-14 w-full flex flex-row gap-10 px-2 py-2 justify-between'>
                    <div className='flex flex-row gap-10'>
                        <Link href={"/groups/" + id} className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2'>Home</Link>
                        <Link href={"/groups/" + id + "/members"} className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2'>Members</Link>
                        <Link href={"/groups/" + id + "/events"} className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2'>Events</Link>

                        <InviteGroupButton groupId={id} users={users} />
                    </div>
                    {
                        group?.user === userId &&
                        <div className='me-5 mt-2'>
                            <Link href={"/groups/" + id + "/edit"} className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2'>Edit</Link>
                        </div>
                    }



                </div>
                <div className="mx-auto mt-1 w-full ">
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Layout
