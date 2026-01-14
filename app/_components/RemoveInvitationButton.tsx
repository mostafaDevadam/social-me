import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'

type RemoveInvitationButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    invitationId: any
}
const RemoveInvitationButton = ({ action, invitationId }: RemoveInvitationButtonProps) => {
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
      <button type="submit" className='border rounded-md px-2 py-1 hover:bg-red-500 hover:border bg-red-400 text-white'>Remove</button>
    </form>
  )
}

export default RemoveInvitationButton