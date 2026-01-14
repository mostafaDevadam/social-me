import BoxEditPost from '@/app/_components/BoxEditPost'
import { updatePostAction } from '@/app/actions/Post.actions'
import { getPostById } from '@/app/api/post'
import React from 'react'

const EditPostPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    console.log("edit post id:", id)

    const post = await getPostById(id)
    console.log("post:", post)



    return (
        <div className="mx-auto max-w-2xl ">
          <BoxEditPost post={post} action={updatePostAction} />

        </div>
    )
}

export default EditPostPage