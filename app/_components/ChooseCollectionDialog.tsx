"use client";

import React from 'react'
import { COLLECTION_TYPE } from '../_types/types';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import SavePostInCollectionButton from './SavePostInCollectionButton';
import { addPostIntoCollectionAction } from '../actions/collections.actions';

type ChooseCollectionDialogProps = {
    postId: any
    collections: COLLECTION_TYPE[]
}
const ChooseCollectionDialog = ({ postId, collections }: ChooseCollectionDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger>
                <button className='border rounded-md bg-sky-400 hover:bg-sky-500 text-white px-2 py-1'>Save in List</button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-center'>Saving in Collection List</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>

                <div className='text-start'>
                    {collections.map((collection, index) => ( 
                        <div key={index} className='flex flex-row justify-between pe-3 pt-2 text-start px-2 w-full border-b'>
                            <p>{collection.name}</p>
                            <SavePostInCollectionButton action={addPostIntoCollectionAction} postId={postId} collectionId={collection?._id} />
                        </div>
                    ))}

                </div>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
            </DialogContent>

        </Dialog>
    )
}

export default ChooseCollectionDialog