import axios from "axios"
import { getToken } from "../_lib/token";
import { getID } from "../_lib/id";
import { callApi } from "./callApi";
import { POSTTYPE } from "../_types/types";


const prefix = "posts"

export const createPost = async (userId: any, post: POSTTYPE) => {
    const res = await callApi(`posts/user/${userId}`, "POST", post)
    console.log("res:", res.data)
    return res.data
}

export const createPostInPage = async (userId: any, pageId: any, post: POSTTYPE) => {
    const res = await callApi(`posts/user/${userId}/page/${pageId}`, "POST", post)
    console.log("res:", res.data)
    return res.data
}

export const createPostInGroup = async (userId: any, groupId: any, post: POSTTYPE) => {
    const res = await callApi(`posts/user/${userId}/group/${groupId}`, "POST", post)
    console.log("res:", res.data)
    return res.data
}

export const createPostInEvent = async (userId: any, eventId: any, post: POSTTYPE) => {
    const res = await callApi(`posts/user/${userId}/event/${eventId}`, "POST", post)
    console.log("res:", res.data)
    return res.data
}

export const updatePost = async (id: any, post: POSTTYPE) => {
    const res = await callApi(`posts/${id}`, "PATCH", post)
    console.log("res:", res.data)
    return res.data

}

export const getPostById = async (id: any) => {
    const res = await callApi(`posts/${id}`, "GET")
    console.log("res:", res.data)
    return res.data
}


export const getPosts = async () => {
    // const res = await callApi(`posts/like/${id}`, "PATCH", { isLike: isLike })
    //const token = await getToken();
    const response = await callApi(`${prefix}`, 'GET')
    return response.data;
}

export const getPostsByUserId = async () => {
    //const token = await getToken();
    const id = await getID()
    const response = await callApi(`${prefix}/all/user/${id}`, 'GET')
    return response.data;
}

export const getAllPostsByPageId = async (pageId: any) => {
    const res = await callApi(`${prefix}/all/page/${pageId}`, "GET")
    console.log("res:", res.data)
    return res.data
}
export const getAllPostsByGroupId = async (groupId: any) => {
    const res = await callApi(`${prefix}/all/group/${groupId}`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const getAllPostsByEventId = async (eventId: any) => {
    const res = await callApi(`${prefix}/all/event/${eventId}`, "GET")
    console.log("res:", res.data)
    return res.data
}


export const postLike = async (id: any, isLike: boolean) => {

    const res = await callApi(`posts/like/${id}`, "PATCH", { isLike: isLike })

    console.log("res:", res.data)

    return res.data


}

export const removePost = async (id: any) => {
    const res = await callApi(`${prefix}/${id}`, "DELETE")
    console.log("res:", res.data)
    return res.data
}