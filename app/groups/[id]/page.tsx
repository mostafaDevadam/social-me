import BoxPost from '@/app/_components/BoxPost'
import PostsList from '@/app/_components/PostsList'
import { getID } from '@/app/_lib/id'
import { createPostInGroupAction } from '@/app/actions/Post.actions'
import { getAllPostsByGroupId } from '@/app/api/post'
import React from 'react'

const GroupPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  console.log("groupId:", id)

   const group_posts = await getAllPostsByGroupId(id)
    console.log("group_posts:", group_posts);


  const userId = await getID();
  console.log("userId:", userId);

  return (
    <div className="mx-auto w-full border">
      <BoxPost action={createPostInGroupAction} groupId={id} />

      <div className="mx-auto mt-10 ">
        <PostsList posts={group_posts} userId={userId} />
      </div>
    </div>
  )
}

export default GroupPage