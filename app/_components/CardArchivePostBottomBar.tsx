"use client";

import React from 'react'
import { ARCHIVE_TYPE, POSTTYPE } from '../_types/types';
import Link from 'next/link';
import UnsaveButton from './UnsaveButton';
import { removePostFromArchiveAction } from '../actions/archive.action';

const CardArchivePostBottomBar = ({post, archive}: {post: POSTTYPE,archive: ARCHIVE_TYPE}) => {
  return (
     <div className='flex flex-row justify-between gap-5 border-t mt-2 pt-2 p-4'>
            <Link href={"/post/"+post._id} className='' ><span>{post.comments || 0}</span>   Comments {post.id} </Link>
            <div className='flex flex-row justify-end'>
                <UnsaveButton post={post} archive={archive} action={removePostFromArchiveAction} />
            </div>
            
        </div>
  )
}

export default CardArchivePostBottomBar