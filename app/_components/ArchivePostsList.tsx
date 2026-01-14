import React from 'react'
import { ARCHIVE_TYPE, POSTTYPE } from '../_types/types'
import CardArchivePost from './CardArchivePost'

const ArchivePostsList = ({ posts, userId, archive }: { posts: POSTTYPE[], userId: any, archive: ARCHIVE_TYPE }) => {
  return (
    <div className='space-y-4 mx-auto w-1/2'>
                {posts.map((post: POSTTYPE) => (
                    <CardArchivePost key={post.id} post={post} archive={archive} isCardBottomBar={true} userId={userId} />
                ))}
            </div>
  )
}

export default ArchivePostsList