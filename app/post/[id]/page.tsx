import BoxComment from '@/app/_components/BoxComment';
import CardPost from '@/app/_components/CardPost';
import CommentsList from '@/app/_components/CommentsList';
import { getID } from '@/app/_lib/id';
import { createCommentAction } from '@/app/actions/comment.actions';
import { getCommentsByPostId } from '@/app/api/comment';
import { getPostById } from '@/app/api/post';
import React from 'react'
type PageProps = {
  searchParams: {
    id?: string;

  };
  params: {
    id: string;
  };
}

const PostPage = async ({ params }: { params: { id: string } }) => {

  const { id } = await params
  console.log("locale:", id)

  const post = await getPostById(id)
  console.log("post:", post)

  const comments = await getCommentsByPostId(id)
   console.log("comments:", comments)

     const userId = await getID();
     console.log("userId:", userId);


  return (
    <div className="mx-auto max-w-2xl">

      <CardPost post={post} key={post.id} isCardBottomBar={true} userId={userId} />

      <div className='mt-5'>
        <BoxComment action={createCommentAction} postId={post?._id}/>
      </div>

      <div className='mt-5'>
         <CommentsList comments={comments} userId={userId} />
      </div>

    </div>
  )
}

export default PostPage