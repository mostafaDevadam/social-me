'use client';

import React from 'react'
import { COMMENTTYPE } from '../_types/types'
import LikeButton from './LikeButton';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Link from 'next/link';
import BoxEditComment from './BoxEditComment';
import { removeCommentActions, updateCommentAction } from '../actions/comment.actions';
import RemoveButton from './RemoveButton';

const CardComment = ({ comment, key, userId }: { comment: COMMENTTYPE, key: any, userId: any }) => {

    const [isEdit, setIsEdit] = React.useState(false);

    const handleIsEdit = () => {
        if (isEdit) setIsEdit(false)
        else setIsEdit(true)
    }

    const handleRemove = () => {
        alert("remove " + comment._id)
    }


    return (
        <div key={key} className='bg-white  rounded-lg shadow-md mt-3'>
            <div className='flex flex-row justify-end pe-3 pt-2'>

                {userId === comment.user ?
                    <Popover>
                        <PopoverTrigger asChild>
                            <button ><BiDotsVerticalRounded className='text-2xl' /></button>
                        </PopoverTrigger>
                        <PopoverContent className="w-28">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <p className="leading-none font-medium cursor-pointer" onClick={handleIsEdit}>Edit</p>

                                    <RemoveButton comment={comment} type='comment' action={removeCommentActions} />
                                </div>

                            </div>
                        </PopoverContent>
                    </Popover>
                    : null}

            </div>
            {
                !isEdit ? <p className='text-gray-600 text-lg font-semibold p-4'>{comment.content}</p> :
                    <BoxEditComment comment={comment} action={updateCommentAction} />
            }

            <div className='flex flex-row justify-end border-t mt-2 pt-2 p-4'>
                <div className='flex flex-row justify-end gap-3' ><span>{comment.likes || 0}</span>  <LikeButton comment={comment} type='comment' /> </div>
            </div>
        </div>
    )
}

export default CardComment