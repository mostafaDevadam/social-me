import { getID } from "../_lib/id"
import { callApi } from "./callApi"

const prefix = "friends"


export const getAllFriendsbyUserId = async () => {
    const userId = await getID()
    const response = await callApi(`${prefix}/all/user/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllFriendsbyFriendId = async () => {
    const userId = await getID()
    const response = await callApi(`${prefix}/all/friend/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const removeFriend = async (friendId: any) => {
    const response = await callApi(`${prefix}/${friendId}`, "DELETE")
    console.log("response:", response.data)
    return response.data
}