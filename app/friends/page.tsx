import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { FRIEND_TYPE, REQUEST_F_TYPE } from '../_types/types'
import { getAllFriendsbyFriendId, getAllFriendsbyUserId } from '../api/friends'
import { getAllRequestsByReceiverId, getAllRequestsBySenderId } from '../api/requests'
import { getID } from '../_lib/id'
import FriendsList from '../_components/FriendsList'
import RequestsList from '../_components/RequestsList'

const FriendsPage = async () => {

  const userId = await getID()

  const user_friends: FRIEND_TYPE[] = await getAllFriendsbyUserId()



  console.log("user_friends:", user_friends)

  const send_requests: REQUEST_F_TYPE[] = await getAllRequestsBySenderId()
  const receiver_requests: REQUEST_F_TYPE[] = await getAllRequestsByReceiverId()

  const requests: REQUEST_F_TYPE[] = [...send_requests, ...receiver_requests]

  console.log("send_requests:", send_requests) // display receiver-name
  console.log("receiver_requests:", receiver_requests) // display sender-name
  // userId == receiver
  // userId == sender

  const friendsbyFriendId: FRIEND_TYPE[] = await getAllFriendsbyFriendId()
  console.log("friendsbyFriendId:", friendsbyFriendId)

  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center mx-auto flex flex-col justify-center">
        <div className="mx-auto mt-10 ">
          <Tabs defaultValue="friends" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="friends">Friends</TabsTrigger>
              <TabsTrigger value="requests">Requests</TabsTrigger>
            </TabsList>
            <TabsContent value="friends">
              <div className='container flex flex-col gap-5'>
                 <FriendsList friends={user_friends} />
                { <FriendsList friends={friendsbyFriendId} />}
              </div>
            </TabsContent>
            <TabsContent value="requests">
              <div className='container flex flex-col gap-5'>
                <RequestsList requests={requests} userId={userId} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default FriendsPage