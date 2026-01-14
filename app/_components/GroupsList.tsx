"use client";

import React from 'react'
import { GROUP_TYPE } from '../_types/types';
import CardGroup from './CardGroup';

type GroupsListProps = {
    groups: GROUP_TYPE[]
    isJoin: boolean
    userId: any
    
}

const GroupsList = ({groups, isJoin, userId}: GroupsListProps) => {
  return (
     <div className='space-y-4 mx-auto w-full'>
                        {groups.map((group: GROUP_TYPE) => (
                            <CardGroup key={group._id} group={group} isJoin={isJoin} userId={userId} />
                        ))}
                    </div>
  )
}

export default GroupsList