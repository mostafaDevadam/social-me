"use client";

import Link from 'next/link'
import React from 'react'
import { POSTTYPE, SHARE_TYPE } from '../_types/types'
import RemoveSharingPostButton from './RemoveSharingPostButton'
import { removeShareByIdAction } from '../actions/shares.action';

type CardSharingPostBottomBarProps = {
    post: POSTTYPE
    share: SHARE_TYPE
}
const CardSharingPostBottomBar = ({ share, post }: CardSharingPostBottomBarProps) => {
    return (
        <div className='flex flex-row justify-between gap-5 border-t mt-2 pt-2 p-4'>
            <Link href={"/post/" + post._id} className='' ><span>{post.comments || 0}</span>   Comments {post.id} </Link>
            <div className='flex flex-row justify-end'>
                <RemoveSharingPostButton action={removeShareByIdAction} share={share} />
            </div>

        </div>
    )
}

export default CardSharingPostBottomBar