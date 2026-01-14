import React from 'react'
import { POSTTYPE, SHARE_TYPE } from '../_types/types'
import CardSharingPost from './CardSharingPost'

const SharingPostsList = ({ shares, userId }: { shares: SHARE_TYPE[], userId: any }) => {
  return (
     <div className='space-y-4 mx-auto w-1/2'>
                {shares.map((share: SHARE_TYPE) => (
                    <CardSharingPost key={share.post?._id} post={share.post!!}  userId={userId} share={share} />
                ))}
            </div>
  )
}

export default SharingPostsList