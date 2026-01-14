"use client";

import React from 'react'
import { GROUP_TYPE } from '../_types/types';
import JoinButton from './JoinButton';
import Link from 'next/link';
import { joinGroupAction, removeGroupAction } from '../actions/group.actions';
import RemovePageGroupButton from './RemovePageGroupButton';

type CardGroupProps = {
  group: GROUP_TYPE,
  isJoin: boolean,
  userId: any
}

const CardGroup = ({group, isJoin, userId }: CardGroupProps) => {

  console.log("group:", group.user, userId, group.user === userId)


  return (
    <div className='flex flex-col justify-between rounded-md border mt-2 pt-2 p-4 w-1/2 mx-auto text-start'>
            <span>{group.name} </span>
            {group.user === userId && <div className={'flex flex-row mt-3 justify-between'}>
              <RemovePageGroupButton action={removeGroupAction} groupId={group?._id} />
                <Link href={`/groups/${group?._id}`} className='border rounded-md bg-sky-500 text-white px-2 py-1'>View</Link>

            </div>}

            {group.user !== userId && <div className={'flex flex-row mt-3 justify-between'}>
                <Link href={`/groups/${group?._id}`} className='border rounded-md bg-sky-500 text-white px-2 py-1'>View</Link>
                {isJoin && <JoinButton action={joinGroupAction} groupId={group?._id}  />}
            </div>}
        </div>
  )
}

export default CardGroup