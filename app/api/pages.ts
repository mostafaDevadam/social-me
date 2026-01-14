import { getID } from "../_lib/id"
import { callApi } from "./callApi"

const prefix ="pages"

export const createPage = async (page: { user: any, name: string, description: string }) => {
    const userId = await getID()
    page.user = userId
    const response = await callApi(`${prefix}/user/${userId}`, "POST", page)
    console.log("response:", response.data)
    return response.data
}

export const updatePage = async (id: any, page: { name: string, description: string }) => {
    const userId = await getID()
    const response = await callApi(`${prefix}/${id}`, "PATCH", page)
    console.log("response:", response.data)
    return response.data
}

export const joinPage = async (pageId: any, member: any) => {
    const userId = await getID()
    const response = await callApi(`${prefix}/join/${pageId}`, "PATCH", {member: member})
    console.log("response:", response.data)
    return response.data
}

export const getAllPages = async () => {
    const response = await callApi(`${prefix}/all`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getPageById = async (pageId: any) => {
    const response = await callApi(`${prefix}/${pageId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllPagesByUserId = async () => {
    const userId = await getID()
    const response = await callApi(`${prefix}/all/user/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const removePage = async (pageId: any) => {
    const response = await callApi(`${prefix}/${pageId}`, "DELETE")
    console.log("response:", response.data)
    return response.data
} 