"use client";

import React from 'react'
import { FRIEND_TYPE } from '../_types/types'
import CardFriend from './CardFriend';

type FriendsListProps = {
    friends: FRIEND_TYPE[]
}
const FriendsList = ({ friends }: FriendsListProps) => {
    return (
        <>
            {friends.map((friend) => (
                <div key={friend._id} >
                    <CardFriend friend={friend} />
                </div>))
            }
        </>
    )

}

export default FriendsList