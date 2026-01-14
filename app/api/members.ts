import { callApi } from "./callApi";


const prefix = "members";




export const getAllMembersByGroupId = async (groupId: any) => {
    const response = await callApi(`${prefix}/all/group/${groupId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllMembersByPageId = async (pageId: any) => {
    const response = await callApi(`${prefix}/all/page/${pageId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllMembersByEventId = async (eventId: any) => {
    const response = await callApi(`${prefix}/all/event/${eventId}`, "GET")
    console.log("response:", response.data)
    return response.data
}


export const removeMember = async (memberId: any) => {
    const response = await callApi(`${prefix}/${memberId}`, "DELETE")
    console.log("response:", response.data)
    return response.data
}