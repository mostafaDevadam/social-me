"use client";

import React from 'react'
import { USERTYPE } from '../_types/types';
import AddFriendButton from './AddFriendButton';
import { sendRequestFriendAction } from '../actions/request.actions';
import ChatButton from './ChatButton';
import { createChatAction } from '../actions/chat.actions';

type CardPeopleProps = {
    person: USERTYPE
    userId: any
}


const CardPeople = ({ person, userId }: CardPeopleProps) => {
    return (
        <div className='flex flex-row justify-between rounded-md border mt-2 pt-2 p-4 w-1/2 mx-auto text-start'>
            <span>{person.fullName} </span>
            <div className='flex flex-row justify-end gap-5'>
                <ChatButton action={createChatAction} person={person} userId={userId} />
                <AddFriendButton person={person} userId={userId} action={sendRequestFriendAction} />
            </div>
        </div>
    )
}

export default CardPeople