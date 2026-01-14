"use server";

import { removeFriend } from "../api/friends";

export const removeFriendAction = async (prevState: any, formData: FormData) => {
    const friendId = formData.get("friendId")
    const response = await removeFriend(friendId)
    console.log("response:", response)
    return response
}