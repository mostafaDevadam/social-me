import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'

type RemoveEventButtonProps = {
  action: (prevState: any, formData: FormData) => Promise<any>
  eventId: any
}
const RemoveEventButton = ({ action, eventId }: RemoveEventButtonProps) => {
  const [state, formAction] = useActionState(action, null)

  useEffect(() => {
    if (state && state.success) {
      console.log("state:", state)
      toast("Event has been removed")
    }else if (state && state.error) {
      console.log("state:", state)
      toast("Cannot remove event")
    }
  }, [state])
  return (
    <form action={formAction} method="post">
      <input type="hidden" name="eventId" value={eventId} />
      <button type="submit" className='border rounded-md px-2 py-1 hover:bg-red-500 hover:border bg-red-400 text-white'>Remove</button>
    </form>

  )
}

export default RemoveEventButton