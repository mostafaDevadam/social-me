import React from 'react'
import CollectionsList from '../_components/CollectionsList'
import { getID } from '../_lib/id'
import { getAllCollectionsByUserId } from '../api/collections'
import Link from 'next/link'
import CreateEditCollectionDialogButton from '../_components/CreateEditCollectionDialogButton'
import { createCollectionByUserIdAction } from '../actions/collections.actions'

const CollectionsPage = async () => {
  const userId = await getID()
  const user_collections = await getAllCollectionsByUserId(userId)
  console.log("user_collections:", user_collections)



  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">

      <div className='flex flex-row justify-end w-full'>
        {/*
          <Link href="/shop/products/new" 
          className='mt-3 hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2 border rounded-md'>
            New Collection</Link>*/
        }

        <CreateEditCollectionDialogButton action={createCollectionByUserIdAction} type_action='create' userId={userId}/>

      </div>

      <div className="text-center mx-auto flex flex-col justify-center w-full">
        <div className="mx-auto mt-10 w-full">
          <CollectionsList collections={user_collections} userId={userId} />
        </div>
      </div>
    </div>
  )
}

export default CollectionsPage