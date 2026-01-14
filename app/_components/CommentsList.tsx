'use client';


import React from 'react'
import { COMMENTTYPE } from '../_types/types'
import CardComment from './CardComment'

const CommentsList = ({ comments, userId }: { comments: COMMENTTYPE[] , userId: any}) => {
  return (
    <div className='space-y-4'>
            {comments.map((comment: COMMENTTYPE) => (
                <CardComment key={comment.id} comment={comment} userId={userId} />
            ))}
        </div>
  )
}

export default CommentsList