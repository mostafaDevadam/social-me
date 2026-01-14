"use client";

import Link from 'next/link'
import React from 'react'

const LeftSideBar = () => {
  return (
    <div className="rounded-md shadow-sm flex flex-col gap-1 *:cursor-pointer w-40 mx-auto">
      <Link href={"/"}
        className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md"
      >Feeds</Link>
      <Link href={"/myposts"}
        className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md "
      >MyPosts</Link>
      <Link href={"/friends"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">Friends</Link>
      <Link href={"/people"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">People</Link>
      <Link href={"/chats"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">Chats</Link>
      <Link href={"/pages"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">Pages</Link>
      <Link href={"/groups"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">Groups</Link>
      <Link href={"/archive"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">Archive</Link>
       <Link href={"/collections"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">Collections</Link>
      <Link href={"/sharing"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">Sharing</Link>
      <Link href={"/events"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">Events</Link>
      <Link href={"/invitations"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">Invitations</Link>
      <Link href={"/shop"} className="mt-3 hover:bg-sky-400 hover:text-white py-2 px-4 rounded-md">Shop</Link>

    </div>
  )
}

export default LeftSideBar