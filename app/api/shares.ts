import { Share } from "lucide-react"
import { getID } from "../_lib/id"
import { callApi } from "./callApi"

const prefix = "shares"


export const createShareByUserAndPost = async (postId: string, content: string) => {
    const userId = await getID()
    const response = await callApi(`${prefix}/post/${postId}/user/${userId}`, "POST", { content})
    console.log("response:", response.data)
    return response.data
}

export const getAllSharesByUserId = async () => {
    const userId = await getID()
    const response = await callApi(`${prefix}/all/user/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllShares = async () => { // display in feeds
    const userId = await getID()
    const response = await callApi(`${prefix}/all`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const removeShareById = async (shareId: any) => {
    const response = await callApi(`${prefix}/${shareId}`, "DELETE")
    console.log("response:", response.data)
    return response.data
}