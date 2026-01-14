import React, { useActionState, useEffect } from 'react'
import { POSTTYPE } from '../_types/types'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { DialogClose, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import CardPost from './CardPost'
import { toast } from 'react-toastify'

type PreSharePostButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    post: POSTTYPE
    userId: any
}


const PreSharePostButton = ({ action, post, userId }: PreSharePostButtonProps) => {

    const [state, formAction] = useActionState(action, null)


    useEffect(() => {
        if (state && state.success) {
            console.log("state:", state)
            toast("Sharing Post!")
        }
        else if (state && state.error) {
            console.log("state:", state)
            toast("Cannot share post!")
        }
    }, [state])
    return (
        <>


            <Dialog>
                <DialogTrigger>
                    <button className='me-5 cursor-pointer'>Share</button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='text-center'>Share</DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>

                    <form action={formAction} className="flex flex-col gap-2 mx-auto w-full">
                        <input type='hidden' name="postId" value={post?._id} />
                        <textarea name="content" className="size-14 grow w-full h-20 resize-none border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                        <button type='submit' className="ml-auto size-14 h-10 flex-none bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold py-2 px-2 rounded-md">Share</button>
                    </form>


                    <CardPost post={post} isCardBottomBar={false} userId={userId} />

                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </DialogContent>

            </Dialog>
        </>

    )
}

export default PreSharePostButton