import { getID } from "../_lib/id"
import { callApi } from "./callApi"

const prefix = "archives"
export const getOneArchivebyUserId = async () => {
    const userId = await getID()
    const response = await callApi(`${prefix}/one/user/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllArchivesByChatId = async (chatId: any) => {
    console.log("getAllArchivesByChatId chatId:", chatId)
    const response = await callApi(`${prefix}/all/chat/${chatId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const createArchiveByUserId = async (post: string) => {
    const userId = await getID()
    const response = await callApi(`${prefix}/user/${userId}`, "POST", { post })
    console.log("response:", response.data)
    return response.data
}

export const createArchiveByUserIdAndMessageId = async (messageId: string) => {
    const userId = await getID()
    const response = await callApi(`${prefix}/user/${userId}/message/${messageId}`, "POST" )
    console.log("response:", response.data)
    return response.data
}


export const createArchiveByUserIdAndChatIdAndMessageId = async (chatId: string, messageId: string) => {
    const userId = await getID()
    const response = await callApi(`${prefix}/user/${userId}/chat/${chatId}/message/${messageId}`, "POST" )
    console.log("response:", response.data)
    return response.data
}



export const removePostFromArchive = async (archiveId: any, postId: any) => {
    const response = await callApi(`${prefix}/${archiveId}/remove/post/${postId}`, "PATCH")
    console.log("response:", response.data)
    return response.data
}


export const removeMessageFromArchive = async (archiveId: any, messageId: any) => {
    const response = await callApi(`${prefix}/${archiveId}/remove/message/${messageId}`, "PATCH")
    console.log("response:", response.data)
    return response.data
}

export const removeArchiveByIdAndMessage = async (archiveId: any, messageId: any) => {
    const response = await callApi(`${prefix}/${archiveId}/message/${messageId}`, "DELETE")
    console.log("response:", response.data)
    return response.data
}