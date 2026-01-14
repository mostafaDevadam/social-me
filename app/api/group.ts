import { getID } from "../_lib/id"
import { callApi } from "./callApi"

const prefix ="groups"

export const createGroup = async (group: { user: any, name: string, description: string }) => {
    const userId = await getID()
    group.user = userId
    const response = await callApi(`${prefix}/user/${userId}`, "POST", group)
    console.log("response:", response.data)
    return response.data
}

export const updateGroup = async (id: any, group: { name: string, description: string }) => {
    const userId = await getID()
    
    const response = await callApi(`${prefix}/${id}`, "PATCH", group)
    console.log("response:", response.data)
    return response.data
}

export const joinGroup = async (groupId: any, member: any) => {
    const userId = await getID()
    const response = await callApi(`${prefix}/join/${groupId}`, "PATCH", {member: member})
    console.log("response:", response.data)
    return response.data
}

export const getAllGroups = async () => {
    const response = await callApi(`${prefix}/all`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getGroupById = async (groupId: any) => {
    const response = await callApi(`${prefix}/${groupId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllGroupsByUserId = async () => {
    const userId = await getID()
    const response = await callApi(`${prefix}/all/user/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const removeGroup = async (pageId: any) => {
    const response = await callApi(`${prefix}/${pageId}`, "DELETE")
    console.log("response:", response.data)
    return response.data
} 