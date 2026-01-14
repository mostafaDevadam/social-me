"use client";

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { DialogClose, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import React from 'react'
import { COLLECTION_TYPE } from '../_types/types';
import CollectionForm from './CollectionForm';

type CreateEditCollectionDialogButtonProps = {
     action: (prevState: any, formData: FormData) => Promise<any>
        type_action: string
        collection?: COLLECTION_TYPE
        userId: any

}
const CreateEditCollectionDialogButton = ({action, collection, type_action, userId}: CreateEditCollectionDialogButtonProps) => {
    return (
        <Dialog>
            <DialogTrigger>

                 <button className='border rounded-md bg-sky-400 hover:bg-sky-500 text-white px-2 py-1'>{type_action === 'create' ? 'New Collection' : 'Edit'}</button>
                
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-center'>{type_action === 'create' ? 'New Collection' : 'Edit Collection'}</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>


                <CollectionForm action={action} type_action={type_action} collection={collection} userId={userId} />

                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
            </DialogContent>

        </Dialog>
    )
}

export default CreateEditCollectionDialogButton