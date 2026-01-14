import React from 'react'
import { MEMBER_TYPE, PAGE_TYPE } from '../_types/types'
import CardMember from './CardMember'

type MembersListProps = {
    members: MEMBER_TYPE[]
    //page: PAGE_TYPE
    //userId: any
}
const MembersList = ({members}: MembersListProps) => {
  return (
    <div className='space-y-4 mx-auto w-1/2'>
            {members.map((member) => (
                <div key={member._id} >
                    <CardMember member={member} />
                </div>))
            }
        </div>
  )
}

export default MembersList