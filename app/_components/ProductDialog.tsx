"use client";

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react'
import { PRODUCT_TYPE } from '../_types/types';
import ProductForm from './ProductForm';

type ProductDialogProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    type_action: string
    product?: PRODUCT_TYPE
    userId: any
}
const ProductDialog = ({ type_action, product, userId, action }: ProductDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger>
                {
                    type_action === 'create' &&  <button className='me-5 cursor-pointer mt-3 hover:bg-sky-500 hover:rounded-md hover:text-white border rounded-md px-2 py-2'>New Product</button>

                }
                {
                    type_action === 'edit' &&  <button className='border rounded-md bg-sky-400 hover:bg-sky-500 text-white px-2 py-1'>Edit</button>

                }
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-center'>{type_action === 'create' ? 'New Product' : 'Edit Product'}</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>


                <ProductForm action={action} type_action={type_action} product={product} userId={userId} />



                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
            </DialogContent>

        </Dialog>
    )
}

export default ProductDialog