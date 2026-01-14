import { callApi } from "./callApi"

const prefix = "chats"

export const createChat = async (members: any[]) => {
    const res = await callApi(`${prefix}`, "POST", {members: members})
    console.log("res:", res.data)
    return res.data
}


export const getAllChatsByMember = async (memberId: any) => {
    const res = await callApi(`${prefix}/all/member/${memberId}`, "GET")
    console.log("res:", res.data)
    return res.data
}


export const removeChat = async (id: any) => {
    const res = await callApi(`${prefix}/${id}`, "DELETE")
    console.log("res:", res.data)
    return res.data
}