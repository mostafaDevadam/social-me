import React from 'react'
import { getPostsByUserId } from '../api/post';
import { getID } from '../_lib/id';
import PostsList from '../_components/PostsList';

const MyPosts = async () => {

    const user_posts = await getPostsByUserId();
    console.log("user_posts:", user_posts);

    const userId = await getID();
    console.log("userId:", userId);


    return (
        <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">
            <div className="text-center mx-auto flex flex-col justify-center">
                <div className="mx-auto mt-10 ">
                    <PostsList posts={user_posts} userId={userId} />
                </div>
            </div>
        </div>
    )
}

export default MyPosts