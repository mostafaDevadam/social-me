import React from 'react'
import { POSTTYPE, SHARE_TYPE } from '../_types/types'
import CardSharingPostBottomBar from './CardSharingPostBottomBar'

type CardSharingPostProps = {
    post: POSTTYPE
    key: any
    userId: any
    share: SHARE_TYPE
}
const CardSharingPost = ({ share, post, key, userId }: CardSharingPostProps) => {
    return (
        <div key={key} className='bg-white  rounded-lg shadow-md mt-3'>
            <div className='flex flex-row justify-end pe-3 pt-2'>
                {userId === post.user ?
                    null
                    : null}

                {userId !== post.user ?
                    null
                    : null}


            </div>
           {share.content && <p className='text-start ms-5'>{share.content}</p>}
            <p className='text-gray-600 text-lg font-semibold p-4'>{post.content}</p>
            <div>
               <CardSharingPostBottomBar post={post} share={share} />
            </div>
            
        </div>
    )
}

export default CardSharingPost