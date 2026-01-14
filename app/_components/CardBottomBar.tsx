   'use client'; 

import React from 'react'
import LikeButton from './LikeButton';
import { POSTTYPE } from '../_types/types';
import { likePostAction } from '../actions/like.actions';
import { coutAllCommentsByPostId } from '../api/comment';
import Link from 'next/link';
import SharePostButton from './SharePostButton';
import { createShareByUserAndPostAction } from '../actions/shares.action';
import PreSharePostButton from './PreSharePostButton';

const CardBottomBar =  ({post, userId}: {post: POSTTYPE, userId: any}) => {
   

    console.log("post:", post._id)
   
    return (
        <div className='flex flex-row justify-between gap-5 border-t mt-2 pt-2 p-4'>
            <Link href={"/post/"+post._id} className='' ><span>{post.comments || 0}</span>   Comments {post.id} </Link>
            <div className='flex flex-row justify-between'>
                {/*<SharePostButton action={createShareByUserAndPostAction} postId={post?._id} userId={userId}  />*/}
                <PreSharePostButton action={createShareByUserAndPostAction} post={post} userId={userId} />
              <div className='flex flex-row gap-3' ><span>{post.likes || 0}</span>  <LikeButton post={post} type='post' /> </div>  
            </div>
            
        </div>
    )
}

export default CardBottomBar