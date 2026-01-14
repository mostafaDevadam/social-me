import BoxPost from '@/app/_components/BoxPost'
import PostsList from '@/app/_components/PostsList'
import { getID } from '@/app/_lib/id'
import { createPostInEventAction } from '@/app/actions/Post.actions'
import { getAllPostsByEventId } from '@/app/api/post'
import React from 'react'

const EventPage = async ({ params }: { params: { id: string } }) => {
    const userId = await getID()
    const { id: eventId } = await params
    const event_posts = await getAllPostsByEventId(eventId)
    console.log("event_posts:", event_posts);
    return (
        <div className=" w-full ">
            <BoxPost action={createPostInEventAction} eventId={eventId} />

            <div className="mx-auto mt-10 w-full">
                <PostsList posts={event_posts} userId={userId} />
            </div>
        </div>
    )
}

export default EventPage