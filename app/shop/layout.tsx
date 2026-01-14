import React from 'react'

const layout = ({ children, cart }: { children: React.ReactNode, cart: React.ReactNode }) => {
  return (
    <div className='flex flex-row gap-5 border justify-between'>
        <div className='border w-full px-2'>
            {children}
        </div>
        <div className='border w-80 px-2'>
            {cart}
        </div>
    </div>
  )
}

export default layout