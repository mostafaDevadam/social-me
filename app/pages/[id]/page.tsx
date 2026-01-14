import BoxPost from '@/app/_components/BoxPost';
import PostsList from '@/app/_components/PostsList';
import { getID } from '@/app/_lib/id';
import { createPostInPageAction } from '@/app/actions/Post.actions';
import { getAllPostsByPageId } from '@/app/api/post';
import React from 'react'

const PageScreen = async ({ params }: { params: { id: string } }) => {

  const { id } = await params
  console.log("pageId:", id)

  const userId = await getID();
  console.log("userId:", userId);

  const page_posts = await getAllPostsByPageId(id)
  console.log("page_posts:", page_posts);


  return (
    <div className="mx-auto w-full border">
      <BoxPost action={createPostInPageAction} pageId={id} />

      <div className="mx-auto mt-10 ">
        <PostsList posts={page_posts} userId={userId} />
      </div>
    </div>
  )
}

export default PageScreen