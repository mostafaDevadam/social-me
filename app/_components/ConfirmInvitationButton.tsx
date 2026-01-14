"use client";
import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify';

type ConfirmInvitationButtonProps = {
    action:  (prevState: any, formData: FormData) => Promise<any>,
    invitationId: string
}
const ConfirmInvitationButton = ({ action, invitationId }: ConfirmInvitationButtonProps) => {
    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if(state && state.success) {
            toast("Invitation has been removed")
        }

        if(state && state.error) {
            toast("Cannot remove invitation")
        }
    }, [ state ])
  return (
     <form action={formAction} method="post">
      <input type="hidden" name="invitationId" value={invitationId} />
      <input type="hidden" name="isConfirmed" value={"true"} />
      <button type="submit" className='border rounded-md px-2 py-1 hover:bg-blue-500 hover:border bg-blue-400 text-white'>Confirm</button>
    </form>
  )
}

export default ConfirmInvitationButton