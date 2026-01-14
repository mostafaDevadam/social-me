import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'

type AddToCartButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>
    productId: any
}
const AddToCartButton = ({action, productId}: AddToCartButtonProps) => {
    const [state, formAction] = useActionState(action, null)

      useEffect(() => {
                if (state && state.success) {
                    console.log("state:", state)
                    toast("Added Product to cart!")
                }
    
                if(state && state.error){
                    console.log("state:", state)
                    toast("Cannot add Product to cart")
                }
            }, [state])


  return (
    <form action={formAction} className={'flex flex-row text-start justify-end'}>
        <input type="hidden" name="productId" value={productId} />
        <button className='border rounded-md bg-sky-400 hover:bg-sky-500 text-white px-2 py-1'>Add To Cart</button>
    </form>
  )
}

export default AddToCartButton