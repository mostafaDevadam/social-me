import MembersList from '@/app/_components/MembersList'
import { getID } from '@/app/_lib/id'
import { getAllMembersByPageId } from '@/app/api/members'
import { getPageById } from '@/app/api/pages'
import { getPostById } from '@/app/api/post'
import React from 'react'

const MembersPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    console.log("pageId:", id)

    const userId = await getID()
    console.log("userId:", userId)

    const members = await getAllMembersByPageId(id)
    console.log("members:", members)

    const page = await getPageById(id)
    console.log("page:", page)


    return (
        <div className='space-y-4 mx-auto w-full pb-5'>
            <MembersList members={members}  />
        </div>
    )
}

export default MembersPage