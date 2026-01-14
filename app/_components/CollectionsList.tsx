"use client";

import React from 'react'
import { COLLECTION_TYPE } from '../_types/types';
import CreateEditCollectionDialogButton from './CreateEditCollectionDialogButton';
import { updateCollectionAction } from '../actions/collections.actions';
import Link from 'next/link';

type CollectionsListProps = {
    collections: COLLECTION_TYPE[],
    userId: any
}

const CollectionsList = ({ collections, userId }: CollectionsListProps) => {
    return (
        <div>
            {collections.map((collection) => (
                <div key={collection?._id} className='bg-white h-20 rounded-lg shadow-md mt-3 flex flex-row justify-between gap-2 w-64 rounded-t-lg '>
                    <div className='flex flex-row justify-start pt-2 text-start '>
                        <div className='bg-blue-500 h-20 w-5 rounded-l-lg -mt-2'>
                        </div>
                        <span className='ps-5'>{collection?.name}</span>
                    </div>


                    <div className='flex flex-row justify-end pe-3 pt-2 text-start px-2 w-full'>

                        <div className='flex flex-row justify-end gap-5'>
                            <CreateEditCollectionDialogButton action={updateCollectionAction} collection={collection} type_action='edit' userId={userId} />
                            <Link href={"/collections/" + collection?._id}
                                className='bg-blue-400 h-10 px-2 py-1 mt-5 text-white text-center hover:bg-blue-500 hover:text-white border  rounded-md'
                            >View</Link>
                        </div>

                    </div>
                   
                </div>
            ))
            }
        </div>
    )
}

export default CollectionsList