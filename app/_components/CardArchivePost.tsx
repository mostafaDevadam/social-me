import React from 'react'
import { ARCHIVE_TYPE, POSTTYPE } from '../_types/types'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import Link from 'next/link'
import RemoveButton from './RemoveButton'
import { removePostAction } from '../actions/Post.actions'
import SavePostButton from './SavePostButton'
import { createArchiveAction } from '../actions/archive.action'
import CardBottomBar from './CardBottomBar'
import CardArchivePostBottomBar from './CardArchivePostBottomBar'

const CardArchivePost = ({ post, key, isCardBottomBar, userId, archive }: { archive: ARCHIVE_TYPE,post: POSTTYPE, key: any, isCardBottomBar: boolean, userId: any }) => {
  return (
   <div key={key} className='bg-white  rounded-lg shadow-md mt-3'>
            <div className='flex flex-row justify-end pe-3 pt-2'>
                {/*userId === post.user ?
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
                    : null*/}

                     {/*userId !== post.user ?
                    <Popover>
                        <PopoverTrigger asChild>
                            <button ><BiDotsVerticalRounded className='text-2xl' /></button>
                        </PopoverTrigger>
                        <PopoverContent className="w-28">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <SavePostButton action={createArchiveAction} postId={post._id}  />
                                    
                                </div>

                            </div>
                        </PopoverContent>
                    </Popover>
                    : null*/}


            </div>
            <p className='text-gray-600 text-lg font-semibold p-4'>{post.content}</p>
            {/*isCardBottomBar ? <CardBottomBar post={post} /> : null*/}
            <CardArchivePostBottomBar post={post} archive={archive}  />
        </div>
  )
}

export default CardArchivePost