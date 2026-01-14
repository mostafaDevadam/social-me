import React from 'react'
import { MEMBER_TYPE } from '../_types/types'


type CardMemberProps = {
    member: MEMBER_TYPE
}



const CardMember = ({ member}:CardMemberProps ) => {
  return (
    <div className='flex flex-row justify-between rounded-md border mt-2 pt-2 p-4'>
            <span>{member?.member?.fullName} </span>
            <div className='flex flex-row justify-end '>
                
            </div>
        </div>
  )
}

export default CardMember