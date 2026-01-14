"use client";

import React from 'react'

const RightSideBar = () => {
  return (
     <div className="rounded-md shadow-sm flex flex-col gap-1 *:cursor-pointer w-80 mx-auto h-screen fixed">
           <div className='flex flex-row justify-between px-2 py-2'>
                <span>RightSideBar</span>
                <button className='border rounded-md bg-sky-500 text-white px-2 py-1'>chat</button>
           </div>
        </div>
  )
}

export default RightSideBar