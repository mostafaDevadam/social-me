'use client';

import React from 'react'
import { COLLECTION_TYPE, POSTTYPE } from '../_types/types'
import CardBottomBar from './CardBottomBar'
import { BiAbacus, BiDotsVertical, BiDotsVerticalRounded } from 'react-icons/bi';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { removePostAction } from '../actions/Post.actions';
import RemoveButton from './RemoveButton';
import SavePostButton from './SavePostButton';
import { createArchiveAction } from '../actions/archive.action';
import ChooseCollectionDialog from './ChooseCollectionDialog';

type CardPostProps = {
    post: POSTTYPE
    key?: any
    isCardBottomBar: boolean
    userId: any
    collections?: COLLECTION_TYPE[]
}
const CardPost = ({ post, key, isCardBottomBar, userId, collections }: CardPostProps) => {
    return (
        <div key={key} className='bg-white  rounded-lg shadow-md mt-3'>
            <div className='flex flex-row justify-end pe-3 pt-2'>
                {userId === post.user ?
                    <Popover>
                        <PopoverTrigger asChild>
                            <button ><BiDotsVerticalRounded className='text-2xl' /></button>
                        </PopoverTrigger>
                        <PopoverContent className="w-28">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <Link href={`/post/edit/${post._id}`} className="leading-none font-medium cursor-pointer">Edit</Link>
                                    <RemoveButton post={post} type='post' action={removePostAction} />
                                </div>

                            </div>
                        </PopoverContent>
                    </Popover>
                    : null}

                     {userId !== post.user ?
                    <Popover>
                        <PopoverTrigger asChild>
                            <button ><BiDotsVerticalRounded className='text-2xl' /></button>
                        </PopoverTrigger>
                        <PopoverContent className="w-40">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <SavePostButton action={createArchiveAction} postId={post._id} />
                                    <ChooseCollectionDialog collections={collections!!} postId={post?._id} />
                                </div>

                            </div>
                        </PopoverContent>
                    </Popover>
                    : null}


            </div>
            <p className='text-gray-600 text-lg font-semibold p-4'>{post.content}</p>
            {isCardBottomBar ? <CardBottomBar post={post} userId={userId} /> : null}
        </div>
    )
}

export default CardPost