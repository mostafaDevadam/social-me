'use client';


import React, { useActionState, useState } from 'react'
import { COMMENTTYPE, POSTTYPE } from '../_types/types'
import { getID } from '../_lib/id';
import { likePostAction } from '../actions/like.actions';
import { postLike } from '../api/post';
import { postLikeAction } from '../actions/Post.actions';
import { commentLikeAction } from '../actions/comment.actions';
import { toast } from 'react-toastify';
type LikeButtonProps = {
  post?: POSTTYPE
  comment?: COMMENTTYPE
  type: string
  //action: (formData: FormData) => Promise<any>
}
const LikeButton = ({ post, comment, type }: LikeButtonProps) => {
  const [isLike, setIsLike] = useState(false)
  //const [state, formAction] = useActionState(action, null)
  const postId = post?._id
  console.log(post?._id)


  const handleLikeClick = async () => {
    const formData: FormData = new FormData();

    //await likePostAction(formData)
    if (isLike) setIsLike(false)
    else setIsLike(true)

    alert("like " + postId + " , " + isLike)
    formData.append("isLike", isLike.toString());
    if (type === "post") {
      formData.append("postId", post?._id?.toString() || '');
      const res = await postLikeAction(formData)
      console.log("res postLike:", res)
      if (res.success) {
        toast("Like Post!")
      } else if (res.error) {
        toast("Cannot like Post!")
      }
    } else if (type === "comment") {
      formData.append("commentId", comment?._id?.toString() || '');
      const res = await commentLikeAction(formData)
      console.log("res commentLike:", res)
      if (res.success) {
        toast("Like Comment!")
      } else if (res.error) {
        toast("Cannot like Comment!")
      }

    }




  }

  return (
    type === 'post' ?
      <button onClick={handleLikeClick} className={'cursor-pointer ' + post?._id && isLike ? 'text-red-500' : 'text-gray-500'}>Likes</button>
      :
      <button onClick={handleLikeClick} className={'cursor-pointer ' + comment?._id && isLike ? 'text-red-500' : 'text-gray-500'}>Likes</button>
  )
}

export default LikeButton