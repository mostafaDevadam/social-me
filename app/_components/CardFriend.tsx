import React from 'react'
import { FRIEND_TYPE } from '../_types/types'
import RemoveRequestFriendButton from './RemoveRequestFriendButton'
import { removeFriendAction } from '../actions/friend.actions'

type CardFriendProps = {
    friend: FRIEND_TYPE
}


const CardFriend = ({ friend }: CardFriendProps) => {
    return (
        <div className='flex flex-row justify-between rounded-md border mt-2 pt-2 p-4'>
            <span>{friend.friend?.fullName} </span>
            <div className='flex flex-row justify-end '>
                <RemoveRequestFriendButton action={removeFriendAction} type='friend' friend={friend} />
            </div>
        </div>
    )
}

export default CardFriend