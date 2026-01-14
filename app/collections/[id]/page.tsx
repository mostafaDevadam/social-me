import PostsList from '@/app/_components/PostsList'
import { getID } from '@/app/_lib/id'
import { COLLECTION_TYPE } from '@/app/_types/types'
import { getCollectionById } from '@/app/api/collections'
import React from 'react'

const CollectionPage = async ({ params }: { params: { id: string } }) => {
    const { id: collectionId } = await params
    console.log('collectionId:', collectionId)

    const collection: COLLECTION_TYPE = await getCollectionById(collectionId)
    console.log("collection:", collection)

    const userId = await getID()

    return (
        <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">
            <div className="text-center mx-auto flex flex-col justify-center">
                <div className="mx-auto mt-10 ">
                    <h2 className='capitalize'>{collection.name} Collection</h2>

                    <PostsList posts={collection.posts!!} userId={userId} />
                </div>
            </div>
        </div>
    )
}

export default CollectionPage