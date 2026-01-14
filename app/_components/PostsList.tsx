'use client';

import React from 'react'
import { COLLECTION_TYPE, POSTTYPE } from '../_types/types'
import CardPost from './CardPost'

type PostsListProps = {
    posts: POSTTYPE[]
     userId: any
     collections?: COLLECTION_TYPE[]
}
function PostsList({ posts, userId, collections }: PostsListProps) {
    return (
        <div className='space-y-4 mx-auto w-1/2'>
            {posts.map((post: POSTTYPE) => (
                <CardPost post={post} isCardBottomBar={true} userId={userId} collections={collections}  />
            ))}
        </div>
    )
}

export default PostsList