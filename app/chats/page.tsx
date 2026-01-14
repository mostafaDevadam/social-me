import React from 'react'
import { getID } from '../_lib/id'
import { getAllChatsByMember } from '../api/chat'
import ChatsGrid from '../_components/ChatsGrid'
import { CHAT_TYPE } from '../_types/types'
import { getOneArchivebyUserId } from '../api/archive'

const ChatsPage = async () => {

    const userId = await getID()

    const user_chats: CHAT_TYPE[] = await getAllChatsByMember(userId)
    console.log("user_chats:", user_chats);

    //const archive = await getOneArchivebyUserId();
    //console.log("archive:", archive)


  return (
    <ChatsGrid chats={user_chats} userId={userId}  />
  )
}

export default ChatsPage