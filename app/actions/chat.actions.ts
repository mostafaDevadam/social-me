"use server";

import { getID } from "../_lib/id"
import { createChat, removeChat } from "../api/chat"


export const createChatAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const friendId = formData.get("friendId")?.toString()

    console.log("createChatAction:", formData,)

    try {
        const res = await createChat([userId, friendId!!])
        console.log("res createChat:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create chat:", error);
        return { error: "Failed to create chat" }
    }

}

export const removeChatAction = async (prevState: any, formData: FormData) => {

    const chatId = formData.get("chatId")?.toString()

    console.log("createChatAction:", formData)

    try {
        const res = await removeChat(chatId)
        console.log("res removeChat:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove chat:", error);
        return { error: "Failed to remove chat" }
    }

}